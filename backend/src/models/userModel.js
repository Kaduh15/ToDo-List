const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'users',
  });

  UserTable.associate = (models) => {
    UserTable.hasMany(models.Task, {
      foreignKey: 'userId',
      as: 'tasks',
    })
  }

  return UserTable;
};

module.exports = UserSchema;