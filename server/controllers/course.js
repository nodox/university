const Course = require('../models').Course;

module.exports = {

  create: (req, res) => {
    return Course
      .create({
        title: req.body.title,
        description: req.body.description,
      })
      .then(course => res.status(201).send(course))
      .catch(error => res.status(400).send(error));
  },
};