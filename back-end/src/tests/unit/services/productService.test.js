const { expect } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');

const { products }  = require('../../../database/models');
const productService = require('../../../api/services/productService');
const { productsListMock } = require('../../mocks/userMock');

describe('product Service', () => {
  describe('quando lista todos os produtos', () => {
    describe('e tem sucesso', () => {
      before(() => {
        sinon.stub(products, 'findAll').resolves(productsListMock);
  
      });
      after(() => {
        sinon.restore();
      });

      it('retorna um objeto com as chaves "status" e "json"', async () => {
        const products = await productService.findAll();

        expect(products).to.be.an('object');
        expect(products).to.have.all.keys('status', 'json');
      });

      it('retorna um objeto json com a lista de produtos e status 200', async () => {
        const products = await productService.findAll();

        expect(products.status).to.be.eq(200);
        expect(products.json).to.be.eq(productsListMock);
      });
    });
   });
});