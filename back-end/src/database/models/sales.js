const SalesModel = (sequelize, DataTypes) => {
  const Sales = sequelize.define('sales', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    sellerId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    deliveryDate: DataTypes.DATE,
    status: DataTypes.STRING,
  }, {
    tableName: 'sales',
    timestamps: false,
    underscored: true,
  });

  Sales.associate = (models) => {
    Sales.belongsTo(models.users,
      { foreignKey: 'userId', as: 'users' },
      { foreignKey: 'sellerId', as: 'sellers' });
  }
  
  return Sales;
};

module.exports = SalesModel;