const { expect } = require('chai');
const md5 = require('md5');
const { describe, it } = require('mocha');
const sinon = require('sinon');

const userModel = require('../../../database/models/users');
const userService = require('../../../database/services/users');
const { userLoginMock, userMock } = require('../../mocks/userMock');

describe('users model', () => {
  describe('logging in', () => {
    describe('when it sucessfully', () => {
      before(() => {
        sinon.stub(userModel, 'findOne').resolves(userMock);
      });
      after(() => {
        sinon.restore();
      });

      it('returns an object', async () => {
        const user = await userService.Login(userLoginMock);
        expect(user).to.be.an('object');
      });

      it('returns an object', async () => {
        const user = await userService.userLogin(userLoginMock);
        expect(user).to.have.all.keys('status', 'json');
      });

      it('returns an json object with token', async () => {
        const user = await userService.userLogin(userLoginMock);
        expect(user.json).to.have.property('token');
      });
    });

    describe('when it failed', () => {
      it('returns an Error with status 400 and message "algum campo esta vazio"', async () => {
        
      });

      it('returns an Error with status 404 and message "usuário não encontrado"', async () => {
       
      });

      it('returns an Error with status 401 and message "senha invalida"', async () => {
        
      });
    })
   })
});