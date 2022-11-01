const { expect } = require('chai');
const sinon = require('sinon');
const jwtServices = require('../../../api/auth/token');

const registerController = require('../../../api/controllers/registerController');
const registerService  = require('../../../api/services/registerService');
const { createUserMock, createUserMockReturn, userTokenMock } = require('../../mocks/userMock');
const testMyController = require('../../utils/testMyController');

const registerServiceReturnMock = {
  status: 201,
  json: { ...createUserMockReturn.dataValues, userToken: userTokenMock }
};

const registerServiceReturnErrorMock = {
  status: 409,
  json: { message: 'Usuário já cadastrado' }
};

describe('Register Controller', () => {
  describe('ao tentar criar um usuário', () => {
    describe('quando tem sucesso', () => {
      const reqMocked = { body: createUserMock };

      before(() => {
        sinon.stub(registerService, 'createRegister').resolves(registerServiceReturnMock);
        sinon.stub(jwtServices, 'generateToken').returns(userTokenMock);
      });
      after(() => {
        sinon.restore();
      });

      it('a resposta da requisição retorna um token, name, email, password e role', async () => {
        const myController = await testMyController(registerController.createRegister, reqMocked);
        
        expect(myController.spies.json.calledOnce).to.be.true;
        expect(myController.body).to.be.an('object');
        expect(myController.body).to.be.have.all.keys('id', 'name', 'email', 'password', 'role', 'userToken');
        expect(myController.body.name).to.be.eq('Batatinha');
        expect(myController.body.email).to.be.eq('batatinha@hotmail.com');
        expect(myController.body.password).to.be.eq('f9104c649c25423a30e2968573899f48');
        expect(myController.body.role).to.be.eq('customer');
        expect(myController.body.userToken).to.be.eq(userTokenMock);
      });

      it('a resposta da requisição retorna o status 201', async () => {
        const myController = await testMyController(registerController.createRegister, reqMocked);

        expect(myController.status).to.be.eq(201);
        expect(myController.spies.status.calledOnce).to.be.true;
        expect(myController.spies.status.calledWith(201)).to.be.true;
      });
    });

    describe('quando não é informado email ou password ou email', () => {
      const reqMocked2 = { body: { name: '', email: '', password: '' } };

      it('a resposta da requisição retorna status 400 e mensagem "Algum campo está vazio"', async () => {
        const myController = await testMyController(registerController.createRegister, reqMocked2);

        expect(myController.spies.json.calledOnce).to.be.true;
        expect(myController.body).to.have.property('message');
        expect(myController.body.message).to.be.eq('Algum campo está vazio');
        expect(myController.spies.status.calledOnce).to.be.true;
        expect(myController.spies.status.calledWith(400)).to.be.true;
        expect(myController.status).to.be.eq(400);
      });
    });

    describe('quando o usuário já existe', () => {
      const reqMocked3 = { body: { name: 'Batatinha', email: 'adm@deliveryapp.com', password: 'batatinha123' } }
      before(() => {
        sinon.stub(registerService, 'createRegister').resolves(registerServiceReturnErrorMock);
       
      });
      after(() => {
        sinon.restore();
      });

      it('a resposta da requisição retorna status 409 e mensagem "Usuário já cadastrado"', async () => {

        const myController = await testMyController(registerController.createRegister, reqMocked3);

        expect(myController.spies.json.calledOnce).to.be.true;
        expect(myController.body).to.have.property('message');
        expect(myController.body.message).to.be.eq('Usuário já cadastrado');
        expect(myController.spies.status.calledOnce).to.be.true;
        expect(myController.spies.status.calledWith(409)).to.be.true;
        expect(myController.status).to.be.eq(409);
      });
    });
  })
});
