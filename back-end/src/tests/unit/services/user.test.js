const { expect } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');

const { Users }  = require('../../../database/models');
const loginService = require('../../../api/services/loginService');
const { userLoginMock, userMock, unregisteredUserMock, userLoginBadPassMock } = require('../../mocks/userMock');

describe('login Service', () => {
  describe('quando faz login', () => {
    describe('e tem sucesso', () => {
      before(() => {
        sinon.stub(Users, 'findOne').resolves(userMock);
      });
      after(() => {
        sinon.restore();
      });

      it('retorna um objeto', async () => {
        const user = await loginService.login(userLoginMock);
        
        expect(user).to.be.an('object');
      });

      it('retorna um objeto com as chaves "status" e "json"', async () => {
        const user = await loginService.login(userLoginMock);

        expect(user).to.have.all.keys('status', 'json');
      });

      it('retorna um objeto json com token e status 200', async () => {
        const user = await loginService.login(userLoginMock);

        expect(user.json).to.have.property('token');
        expect(user.status).to.be.eq(200);
      });
    });

    describe('quando falha', () => {

      it('retorna um objeto com as chaves "status" e "json" contendo a chave "message"', async () => {
        const user = await loginService.login({ password: 'any-pass' });
        
        expect(user).to.be.an('object');
        expect(user).to.be.have.all.keys('status', 'json');
      })
    
      it('retorna um Erro com status 400 e mensagem "Algum campo está vazio"', async () => {
        const user = await loginService.login({ password: 'any-pass' });

        expect(user.status).to.be.eq(400);
        expect(user.json.message).to.be.eq('Algum campo está vazio');
      });

      it('retorna um Erro com status 404 e mensagem "Usuário não encontrado"', async () => {
        const user = await loginService.login(unregisteredUserMock);
        
        expect(user.status).to.be.eq(404);
        expect(user.json.message).to.be.eq('Usuário não encontrado');
      });

      it('retorna um Erro com status 401 e mensagem "Senha inválida"', async () => {
        const user = await loginService.login(userLoginBadPassMock);
        
        expect(user.status).to.be.eq(401);
        expect(user.json.message).to.be.eq('Senha inválida');
      });
    })
   })
});