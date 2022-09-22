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
    TaskTable.hasOne(models.User, {
      foreignKey: 'id',
      as: 'user',
    })
  }

  return TaskTable;
};

module.exports = TaskSchema;