'use strict';
module.exports = (sequelize, DataTypes) => {
  const University = sequelize.define('University', {
    name: { 
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    phoneNumber: {
      type: DataTypes.STRING
    },
  }, {

    classMethods: {
      associate: (models) => {
        // associations can be defined here
        University.hasMany(models.Course, {
          foreignKey: 'universityId',
          as: 'courses'
        });

      }
    }
  });
  return University;
};