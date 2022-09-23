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
    TaskTable.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    })
  }

  return TaskTable;
};

module.exports = TaskSchema;