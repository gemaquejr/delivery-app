const SalesProductsModel = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('salesProducts', {
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
  }, {
    tableName: 'salesProducts',
    timestamps: false,
  });

  SalesProducts.associate = (models) =>  {
    models.Products.belongsToMany(models.Sales, {
      through: SalesProducts,
      as: 'sales',
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
    models.Sales.belongsToMany(models.Products, {
      through: SalesProducts,
      as: 'products',
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
  }; 
  
  return SalesProducts;
};

module.exports = SalesProductsModel;