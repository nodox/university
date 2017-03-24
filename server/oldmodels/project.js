var Sequelize = require('sequelize');

var Project = sequelize.define('project', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT
});



// var University = sequelize.define('University', {
//   id: Sequelize.INTEGER,
//   name: Sequelize.STRING,
//   address: Sequelize.TEXT
//   phoneNumber: Sequelize.INTEGER,
//   description: Sequelize.TEXT
// });

// var Course = sequelize.define('Course', {
//   id: Sequelize.INTEGER,
//   title: Sequelize.STRING,
//   department: Sequelize.STRING,
//   courseCode: Sequelize.TEXT,
//   description: Sequelize.TEXT
// });

// Course.belongsTo(University);

module.exports = Project;
