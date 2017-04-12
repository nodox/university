'use strict';
module.exports = (sequelize, DataTypes) => {
  const College = sequelize.define('College', {
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

        College.hasMany(models.Course, {
          foreignKey: 'collegeId'
        }); 
      }
    }
  });
  return College;
};