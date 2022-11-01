const { expect } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');

const { users }  = require('../../../database/models');
const loginService = require('../../../api/services/loginService');
const { userLoginMock, userMock, unregisteredUserMock, userLoginBadPassMock, userToken } = require('../../mocks/userMock');
const jwtServices = require('../../../api/auth/token');

describe('login Service', () => {
  describe('quando faz login', () => {
    describe('e tem sucesso', () => {
      before(() => {
        sinon.stub(users, 'findOne').resolves(userMock);
        sinon.stub(jwtServices, 'generateToken').returns(userToken);
      });
      after(() => {
        sinon.restore();
      });

      it('retorna um objeto', async () => {
        const user = await loginService.login(userLoginMock.email, userLoginMock.password);
        
        expect(user).to.be.an('object');
      });

      it('retorna um objeto com as chaves "status" e "json"', async () => {
        const user = await loginService.login(userLoginMock.email, userLoginMock.password);

        expect(user).to.have.all.keys('status', 'json');
      });

      it('retorna um objeto json com token e status 200', async () => {
        const user = await loginService.login(userLoginMock.email, userLoginMock.password);

        expect(user.json).to.have.all.keys('name', 'role', 'userToken');
        expect(user.status).to.be.eq(200);
        expect(user.json.name).to.be.eq(userMock.name);
        expect(user.json.role).to.be.eq(userMock.role);
        expect(user.json.userToken).to.be.eq(userToken);
      });
    });

    describe('quando falha', () => {

      it('retorna um objeto com as chaves "status" e "json" contendo a chave "message"', async () => {
        const user = await loginService.login('', 'any-pass');
        
        expect(user).to.be.an('object');
        expect(user).to.be.have.all.keys('status', 'json');
      })
    
      it('retorna um Erro com status 400 e mensagem "Algum campo está vazio"', async () => {
        const user = await loginService.login('', 'any-pass');

        expect(user.status).to.be.eq(400);
        expect(user.json.message).to.be.eq('Algum campo está vazio');
      });

      it('retorna um Erro com status 404 e mensagem "Usuário não encontrado"', async () => {
        const user = await loginService.login(unregisteredUserMock.email, unregisteredUserMock.password);
        
        expect(user.status).to.be.eq(404);
        expect(user.json.message).to.be.eq('Usuário não encontrado');
      });

      it('retorna um Erro com status 401 e mensagem "Senha inválida"', async () => {
        const user = await loginService.login(userLoginBadPassMock.email, userLoginBadPassMock.password);
        
        expect(user.status).to.be.eq(401);
        expect(user.json.message).to.be.eq('Senha inválida');
      });
    })
   })
});