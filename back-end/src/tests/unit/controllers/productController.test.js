const { expect } = require('chai');
const sinon = require('sinon');

const productController = require('../../../api/controllers/productController');
const productService  = require('../../../api/services/productService');
const { productsListMock } = require('../../mocks/userMock');
const testMyController = require('../../utils/testMyController');

const productServiceReturnMock = {
  status: 200,
  json: productsListMock,
}

describe('product Controller', () => {
  describe('quando lista todos os produtos', () => {
    describe('e tem sucesso', () => {
      before(() => {
        sinon.stub(productService, 'findAll').resolves(productServiceReturnMock);
      });
      after(() => {
        sinon.restore();
      });

      it('a resposta da requisição retorna uma lista de produtos', async () => {
        const myController = await testMyController(productController.findAllProducts);
        
        expect(myController.spies.json.calledOnce).to.be.true;
        expect(myController.body).to.be.an('array');
        expect(myController.body).to.have.lengthOf(3);
        expect(myController.body[0]).to.be.eq(productsListMock[0]);
        expect(myController.body[1]).to.be.eq(productsListMock[1]);
        expect(myController.body[2]).to.be.eq(productsListMock[2]);
      });

      it('a resposta da requisição retorna o status 200', async () => {
        const myController = await testMyController(productController.findAllProducts);

        expect(myController.status).to.be.eq(200);
        expect(myController.spies.status.calledOnce).to.be.true;
        expect(myController.spies.status.calledWith(200)).to.be.true;
      });
    });
  })
});
