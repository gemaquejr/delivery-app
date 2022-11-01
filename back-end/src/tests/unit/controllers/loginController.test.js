const { expect } = require('chai');
const sinon = require('sinon');
const jwtServices = require('../../../api/auth/token');

const loginController = require('../../../api/controllers/loginController');
const loginService  = require('../../../api/services/loginService');
const { userMock, userLoginMock, userLoginBadPassMock, userToken } = require('../../mocks/userMock');
const testMyController = require('../../utils/testMyController');

const loginServiceReturnMock = {
  status: 200,
  json: { name: userMock.name, role: userMock.role, userToken },
}

const loginServiceBadPassReturnMock = {
  status: 401,
  json: { message: 'Senha inválida' },
}

describe('login Controller', () => {
  describe('quando faz login', () => {
    describe('e tem sucesso', () => {
      const reqMocked = { body: userLoginMock };

      before(() => {
        sinon.stub(loginService, 'login').resolves(loginServiceReturnMock);
        sinon.stub(jwtServices,'generateToken').returns(userToken);
      });
      after(() => {
        sinon.restore();
      });

      it('a resposta da requisição retorna um token, name e role', async () => {
        const myController = await testMyController(loginController, reqMocked);
        

        expect(myController.body).to.be.an('object');
        expect(myController.body).to.all.keys('name', 'role', 'userToken');
        expect(myController.body.name).to.be.eq(userMock.name);
        expect(myController.body.role).to.be.eq(userMock.role);
        expect(myController.body.userToken).to.be.eq(userToken);
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
      const reqMocked2 = { body: { email: '', password: '' } };
      it('a resposta da requisição retorna status 400', async () => {
        const myController = await testMyController(loginController, reqMocked2);

        expect(myController.status).to.be.eq(400);
        expect(myController.spies.status.calledOnce).to.be.true;
        expect(myController.spies.status.calledWith(400)).to.be.true;
      });

      it('a resposta da requisição retorna a mensagem "Algum campo está vazio"', async () => {
        const myController = await testMyController(loginController, reqMocked2);

        expect(myController.body).to.be.an('object');
        expect(myController.body.message).to.be.eq('Algum campo está vazio');
        expect(myController.spies.json.calledOnce).to.be.true;
        expect(myController.spies.json.calledWith({ message: 'Algum campo está vazio' })).to.be.true;
        
      });
    })

    describe('quando é informado um email que não foi registrado', () => {
      const reqMocked3 = { body: { email: 'vaifalhar@test.com', password: 'vaifalhar' } };
      it('a resposta da requisição retorna status 404', async () => {
        const myController = await testMyController(loginController, reqMocked3);

        expect(myController.status).to.be.eq(404);
        expect(myController.spies.status.calledOnce).to.be.true;
        expect(myController.spies.status.calledWith(404)).to.be.true;
      });

      it('a resposta da requisição retorna a mensagem "Usuário não encontrado"', async () => {
        const myController = await testMyController(loginController, reqMocked3);

        expect(myController.body).to.be.an('object');
        expect(myController.body.message).to.be.eq('Usuário não encontrado');
        expect(myController.spies.json.calledOnce).to.be.true;
        expect(myController.spies.json.calledWith({ message: 'Usuário não encontrado' })).to.be.true;
        
      });
    })

    describe('quando é encontrado o email mas a senha está incorreta', () => {
      const reqMocked4 = { body: userLoginBadPassMock };

      before(() => {
        sinon.stub(loginService, 'login').resolves(loginServiceBadPassReturnMock);
      });
      after(() => {
        sinon.restore();
      });

      it('a resposta da requisição retorna status 401', async () => {
        const myController = await testMyController(loginController, reqMocked4);

        expect(myController.status).to.be.eq(401);
        expect(myController.spies.status.calledOnce).to.be.true;
        expect(myController.spies.status.calledWith(401)).to.be.true;
      });

      it('a resposta da requisição retorna a mensagem "Senha inválida"', async () => {
        const myController = await testMyController(loginController, reqMocked4);

        expect(myController.body).to.be.an('object');
        expect(myController.body.message).to.be.eq('Senha inválida');
        expect(myController.spies.json.calledOnce).to.be.true;
        expect(myController.spies.json.calledWith({ message: 'Senha inválida' })).to.be.true;
        
      });
    })
  })
});
