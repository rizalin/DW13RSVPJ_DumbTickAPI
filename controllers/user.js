const models = require("../models")
const User = models.user

exports.show = (req, res) => {
  User.findOne({ where: { id: req.params.id } }).then(user =>
    res.send(user)
  );
};

exports.update = (req, res) => {
  User.update(req.body, { where: { id: req.params.id } }).then(user => {
    res.send({
      message: "success",
      user
    });
  });
};