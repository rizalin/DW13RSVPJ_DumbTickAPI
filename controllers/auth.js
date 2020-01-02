const jwt = require("jsonwebtoken");
const models = require("../models");
const User = models.user;
exports.login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({ where: { username, password } }).then(user => {
    if (user) {
      const token = jwt.sign({ userId: user.id }, "yabaiwayo");
      res.send({
        name: user.name,
        username: user.username,
        id: user.id,
        token
      });
    } else {
      res.send({
        error: true,
        message: "Wrong Email or Password!"
      });
    }
  });
};

exports.register = (req, res) => {
  User.create(req.body).then(user => {
    const token = jwt.sign({ userId: user.id }, "yabaiwayo");
    res.send({
      name: user.name,
      username: user.username,
      id: user.id,
      token
    });
  });
};
