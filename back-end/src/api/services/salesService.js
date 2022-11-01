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
    deliveryDate: new Date(),
    status: 'em preparo',
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

  return { status: 201, json: { message: 'funcionou' } };
};

module.exports = { createSale };