const University = require('../models').University;

module.exports = {

  create: (req, res) => {
    return University
      .create({
        name: req.body.name,
        address: req.body.address,
        phoneNumber: req.body.phone,

      })
      .then(university => res.status(201).send(university))
      .catch(error => res.status(400).send(error));
  },
};