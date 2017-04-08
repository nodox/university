'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Course', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },



      building: {
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,

      },
      title: {
        type: Sequelize.STRING,
        allowNull: false

      },
      department: {
        type: Sequelize.STRING
      },
      days: {
        type: Sequelize.STRING
      },
      credits: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.STRING
      },
      instructor: {
        type: Sequelize.STRING
      },
      school: {
        type: Sequelize.STRING
      },




      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Course');
  }
};