const TaskSchema = (sequelize, DataTypes) => {
  const TaskTable = sequelize.define('Task', {
    nameTask: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'tasks',
  });

  TaskTable.associate = (models) => {
    TaskTable.hasMany(models.User, {
      foreignKey: 'id',
      as: 'Users',
    })
  }

  return TaskTable;
};

module.exports = TaskSchema;