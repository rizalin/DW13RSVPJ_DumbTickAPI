const models = require("../models");
const Event = models.event;
const Category = models.category;
const User = models.user;
const Order = models.order;

exports.store = (req, res) => {
  Order.create(req.body).then(article => {
    res.send({
      message: "success",
      article
    });
  });
};

exports.update = (req, res) => {
  Order.update(req.body, { where: { id: req.params.id } }).then(order => {
    res.send({
      message: "success",
      order
    });
  });
};

exports.index = (req, res) => {
  Order.findAll({
    include: [
      {
        model: Event,
        as: "event",
        attributes: ["id", "title", "startTime", "price", "address"],
      },
      {
        model: User,
        as: "orderedBy",
        attributes: ["name"]
      }
    ]
  }).then(event => res.send(event)).catch(err => res.send(err));
};

exports.show = (req, res) => {
  Order.findAll({
    where: { ordered_by: req.params.id },
    include: [
      {
        model: Event,
        as: "event",
        attributes: ["id", "title", "startTime", "price", "address"],
      },
      {
        model: User,
        as: "orderedBy",
        attributes: ["name"]
      }
    ]
  }).then(event => res.send(event)).catch(err => res.send(err));
};