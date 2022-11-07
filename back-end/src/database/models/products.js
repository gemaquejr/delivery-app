const ProductsModel = (sequelize, DataTypes) => {
  const Products = sequelize.define('products', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4, 2),
    urlImage: DataTypes.STRING,
  }, {
    tableName: 'products',
    timestamps: false,
    underscored: true,
  });
  
  return Products;
};

module.exports = ProductsModel;