'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Ticket.belongsTo(models.User, {
        foreignKey: 'created_by',
        as: 'creator'
      });

      models.Ticket.belongsTo(models.User, {
        foreignKey: 'assigned_to',
        as: 'assignee'
      });
    }
  }
  Ticket.init({
    created_by: DataTypes.INTEGER,
    assigned_to: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.ENUM('open', 'closed', 'in-progress')
    
  }, {
    sequelize,
    modelName: 'Ticket',
  });

  return Ticket;
};