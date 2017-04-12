const College = require('../models').College;

module.exports = {

  create: (req, res) => {
    return College
      .create({
        name: req.body.name,
        address: req.body.address,
        phoneNumber: req.body.phone,

      })
      .then(college => res.status(201).send(college))
      .catch(error => res.status(400).send(error));
  },
};