'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Courses', {
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


      collegeId: {
        type: Sequelize.INTEGER,        
        references: {
            model: 'Colleges',
            key: 'id',
            as: 'collegeId'
          },
      },

      createdAt: {
        // allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        // allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW 
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Courses');
  }
};