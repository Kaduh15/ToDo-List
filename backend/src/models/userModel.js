const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  });

  UserTable.associate = (models) => {
    UserTable.hasMany(models.Task, {
      foreignKey: 'id',
      as: 'tasks',
    })
  }

  return UserTable;
};

module.exports = UserSchema;