const SalesProductsModel = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    saleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      foreignKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      foreignKey: true,
    },
    quantity: DataTypes.INTEGER,
  }, {
    tableName: 'sales_products',
    timestamps: false,
    underscored: true,
  });

  SalesProducts.associate = (models) =>  {
    models.products.belongsToMany(models.sales, {
      through: SalesProducts,
      as: 'sales',
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
    models.sales.belongsToMany(models.products, {
      through: SalesProducts,
      as: 'products',
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
  }; 
  
  return SalesProducts;
};

module.exports = SalesProductsModel;