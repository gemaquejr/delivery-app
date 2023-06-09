const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    tableName: 'users',
    timestamps: false,
  });

  User.associate = (models) => {
    User.hasMany(models.sales,
      { foreignKey: 'id', as: 'users' },
      { foreignKey: 'id', as: 'sellers' });
  }
  
  return User;
};

module.exports = UserModel;