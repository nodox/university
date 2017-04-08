'use strict';
module.exports = (sequelize, DataTypes) => {
  var Course = sequelize.define('Course', {
    building: {
      type: DataTypes.STRING
    },
    code: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    title: {
      type: DataTypes.STRING
    },
    department: {
      type: DataTypes.STRING
    },
    days: {
      type: DataTypes.STRING
    },
    credits: {
      type: DataTypes.STRING
    },
    time: {
      type: DataTypes.STRING
    },
    instructor: {
      type: DataTypes.STRING
    },
    school: {
      type: DataTypes.STRING
    },
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        Course.belongsTo(models.University, {
          foreignKey: 'universityId'
        });
      }
    }
  });
  return Course;
};