const { expect } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');

const { sales, SalesProducts } = require('../../../database/models');
const salesService = require('../../../api/services/salesService');
const { salesMock, salesProductWithId1, salesProductWithId2, salesReturnMock } = require('../../mocks/salesMock');


describe('Sales Service', () => {
  describe('ao tentar criar uma venda', () => {
    describe('e tem sucesso', () => {
      before(() => {
        sinon.stub(sales, 'create').resolves(salesReturnMock);
        sinon.stub(SalesProducts, 'create')
          .onCall(0).resolves(salesProductWithId1)
          .onCall(1).resolves(salesProductWithId2);
      });
      after(() => {
        sinon.restore();
      });

      it('retorna um objeto com as chaves "status" e "json"', async () => {
        const newUser = await salesService.createSale(salesMock);

        expect(newUser).to.be.an('object');
        expect(newUser).to.have.all.keys('status', 'json');
      });

      it('retorna status 201 e um objeto json com a mensagem "funcionou"', async () => {
        const newUser = await salesService.createSale(salesMock);


        expect(newUser.status).to.be.eq(201);
        expect(newUser.json).to.be.deep.eq({ message: 'funcionou' });
      });
    });
   })
});