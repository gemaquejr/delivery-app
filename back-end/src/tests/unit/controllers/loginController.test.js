const { expect } = require('chai');
const sinon = require('sinon');

const loginController = require('../../../api/controllers/loginController');
const { Users }  = require('../../../database/models');
const { userMock, userLoginMock, userLoginBadPassMock } = require('../../mocks/userMock');
const testMyController = require('../../utils/testMyController');

describe('login Service', () => {
  describe('quando faz login', () => {
    describe('e tem sucesso', () => {
      const reqMocked = { body: userLoginMock };

      before(() => {
        sinon.stub(Users, 'findOne').resolves(userMock);
      });
      after(() => {
        sinon.restore();
      });

      it('a resposta da requisição retorna um token', async () => {
        const myController = await testMyController(loginController, reqMocked);
        expect(myController.body).to.have.property('token');
        expect(myController.body).to.be.an('object');
        expect(myController.spies.json.calledOnce).to.be.true;
      });

      it('a resposta da requisição retorna o status 200', async () => {
        const myController = await testMyController(loginController, reqMocked);

        expect(myController.status).to.be.eq(200);
        expect(myController.spies.status.calledOnce).to.be.true;
        expect(myController.spies.status.calledWith(200)).to.be.true;
      });
    });

    describe('quando não é informado email e/ou password', () => {
      const reqMocked = { body: { email: '', password: '' } };
      it('a resposta da requisição retorna status 400', async () => {
        const myController = await testMyController(loginController, reqMocked);

        expect(myController.status).to.be.eq(400);
        expect(myController.spies.status.calledOnce).to.be.true;
        expect(myController.spies.status.calledWith(400)).to.be.true;
      });

      it('a resposta da requisição retorna a mensagem "Algum campo está vazio"', async () => {
        const myController = await testMyController(loginController, reqMocked);

        expect(myController.body).to.be.an('object');
        expect(myController.body.message).to.be.eq('Algum campo está vazio');
        expect(myController.spies.json.calledOnce).to.be.true;
        expect(myController.spies.json.calledWith({ message: 'Algum campo está vazio' })).to.be.true;
        
      });
    })

    describe('quando é informado um email que não foi registrado', () => {
      const reqMocked = { body: { email: 'vaifalhar@test.com', password: 'vaifalhar' } };
      it('a resposta da requisição retorna status 404', async () => {
        const myController = await testMyController(loginController, reqMocked);

        expect(myController.status).to.be.eq(404);
        expect(myController.spies.status.calledOnce).to.be.true;
        expect(myController.spies.status.calledWith(404)).to.be.true;
      });

      it('a resposta da requisição retorna a mensagem "Usuário não encontrado"', async () => {
        const myController = await testMyController(loginController, reqMocked);

        expect(myController.body).to.be.an('object');
        expect(myController.body.message).to.be.eq('Usuário não encontrado');
        expect(myController.spies.json.calledOnce).to.be.true;
        expect(myController.spies.json.calledWith({ message: 'Usuário não encontrado' })).to.be.true;
        
      });
    })

    describe('quando é encontrado o email mas a senha está incorreta', () => {
      const reqMocked = { body: userLoginBadPassMock };

      before(() => {
        sinon.stub(Users, 'findOne').resolves(userMock);
      });
      after(() => {
        sinon.restore();
      });

      it('a resposta da requisição retorna status 401', async () => {
        const myController = await testMyController(loginController, reqMocked);

        expect(myController.status).to.be.eq(401);
        expect(myController.spies.status.calledOnce).to.be.true;
        expect(myController.spies.status.calledWith(401)).to.be.true;
      });

      it('a resposta da requisição retorna a mensagem "Senha inválida"', async () => {
        const myController = await testMyController(loginController, reqMocked);

        expect(myController.body).to.be.an('object');
        expect(myController.body.message).to.be.eq('Senha inválida');
        expect(myController.spies.json.calledOnce).to.be.true;
        expect(myController.spies.json.calledWith({ message: 'Senha inválida' })).to.be.true;
        
      });
    })
  })
});
