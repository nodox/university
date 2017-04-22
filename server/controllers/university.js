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
  find: (req, res) => {


    const name = req.query.n;

    const queryOptions = {};

    if (name) {
      queryOptions.name = {
        $iLike: '%'+ name +'%'
      };
    }

    College.findAll({ 
      where: queryOptions,
    }).then((data) => {
      res.status(201).send(data);
    })
    .catch(error => res.status(400).send(error));
  }
};