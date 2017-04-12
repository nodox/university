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

        // Will add a CourseId attribute to College to hold the primary key value for Course
        // Will add CollegeId to Course
        Course.belongsTo(models.College, {
          foreignKey: 'collegeId'
        });
      }
    }
  });
  return Course;
};