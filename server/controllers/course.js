const Course = require('../models').Course;

module.exports = {

  create: (req, res) => {
    return Course
      .create({
        title: req.body.title,
        description: req.body.description,
        collegeId: req.body.collegeId,
      })
      .then(course => res.status(201).send(course))
      .catch(error => res.status(400).send(error));
  },

  find: (req, res) => {

    const universityId = req.query.collegeId;
    console.log(req.query);

    Course.findAll({ where: { collegeId: universityId } }).then((data) => {
      res.status(201).send(data);
    })
    .catch(error => res.status(400).send(error));
  }
};