const { expect } = require('chai');
const sinon = require('sinon');

const salesController = require('../../../api/controllers/salesController');
const salesService  = require('../../../api/services/salesService');
const { salesMock } = require('../../mocks/salesMock');
const testMyController = require('../../utils/testMyController');

const salesServiceReturnMock = {
  status: 201,
  json: { message: 'funcionou' },
};

describe('Sales Controller', () => {
  describe('ao tentar criar uma venda', () => {
    describe('quando tem sucesso', () => {
      const reqMocked = { body: salesMock };

      before(() => {
        sinon.stub(salesService, 'createSale').resolves(salesServiceReturnMock);
      });
      after(() => {
        sinon.restore();
      });

      it('a resposta da requisição retorna a mensagem "funcionou"', async () => {
        const myController = await testMyController(salesController.newSale, reqMocked);
        
        expect(myController.spies.json.calledOnce).to.be.true;
        expect(myController.body).to.be.an('object');
        expect(myController.body).to.be.have.property('message');
        expect(myController.body).to.be.deep.eq({ message: 'funcionou' });
      });

      it('a resposta da requisição retorna o status 201', async () => {
        const myController = await testMyController(salesController.newSale, reqMocked);

        expect(myController.status).to.be.eq(201);
        expect(myController.spies.status.calledOnce).to.be.true;
        expect(myController.spies.status.calledWith(201)).to.be.true;
      });
    });
  });
});
