const { sales, SalesProducts } = require('../../database/models');

const createSaleEntry = async (saleInfo) => {
  const {
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
  } = saleInfo;

  const newSale = await sales.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate: new Date(),
    status: 'Pendente',
  });

  return newSale;
};

const createSale = async (saleInfo) => {
  const newSale = await createSaleEntry(saleInfo);
  const saleId = newSale.dataValues.id;
  const { productsList } = saleInfo;
  
  productsList.forEach(async (product) => {
    const { productId, quantity } = product;
    await SalesProducts.create({
    saleId,
    productId,
    quantity,
  });
  });

  return { status: 201, json: { saleId } };
};

const findSaleById = async (id) => {
  const sale = await sales.findOne({
    where: {
      id,
    },
    raw: true,
  });
  const productsList = await SalesProducts.findAll({
    where: {
      saleId: id,
    },
    attributes: { exclude: ['id'] },
    raw: true,
  });

  const response = { ...sale, productsList };

  return { status: 201, json: response };
};

const getAllSales = async () => {
  const allSales = await sales.findAll();

  return { status: 201, json: allSales };
}

module.exports = { createSale, findSaleById, getAllSales };