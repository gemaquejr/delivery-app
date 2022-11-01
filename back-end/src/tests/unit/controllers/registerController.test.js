const { expect } = require('chai');
const sinon = require('sinon');

const registerController = require('../../../api/controllers/registerController');
const { users }  = require('../../../database/models');
const { createUserMock, createUserMockReturn } = require('../../mocks/userMock');
const testMyController = require('../../utils/testMyController');

describe('Register Controller', () => {
  describe('quando cria um usuário', () => {
    describe('e tem sucesso', () => {
      const reqMocked = { body: createUserMock };

      before(() => {
        sinon.stub(users, 'create').resolves(createUserMockReturn);
      });
      after(() => {
        sinon.restore();
      });

      it('a resposta da requisição retorna um token', async () => {
        const myController = await testMyController(registerController.createRegister, reqMocked);

        expect(myController.body).to.be.have.all.keys('id', 'name', 'email', 'password', 'role', 'userToken');
        expect(myController.body).to.be.an('object');
        expect(myController.spies.json.calledOnce).to.be.true;
      });

      it('a resposta da requisição retorna o status 201', async () => {
        const myController = await testMyController(registerController.createRegister, reqMocked);

        expect(myController.status).to.be.eq(201);
        expect(myController.spies.status.calledOnce).to.be.true;
        expect(myController.spies.status.calledWith(201)).to.be.true;
      });
    });
  })
});
