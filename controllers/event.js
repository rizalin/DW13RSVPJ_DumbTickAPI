const models = require("../models");
const Event = models.event;
const Category = models.category;
const User = models.user;
const { Op } = require('sequelize')
const moment = require('moment')


exports.show = (req, res) => {
  Event.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Category,
        as: "category",
        attributes: ["id", "name"]
      },
      {
        model: User,
        as: "createdBy",
        attributes: ["id", "name", "phoneNumber", "email"]
      }
    ]
  }).then(event => res.send(event));
};

exports.index = (req, res) => {
  Event.findAll({
    include: [
      {
        model: Category,
        as: "category",
        attributes: ["id", "name"]
      },
      {
        model: User,
        as: "createdBy",
        attributes: ["id", "name"]
      }
    ]
  }).then(event => res.send(event));
};

exports.store = (req, res) => {
  Event.create(req.body).then(event => {
    res.send({
      message: "success",
      event
    });
  });
};

exports.byDate = (req, res) => {
  Event.findAll({
    where: { startTime: { [Op.gt]: new Date() } },
    include: [
      {
        model: Category,
        as: "category",
        attributes: ["id", "name"]
      },
      {
        model: User,
        as: "createdBy",
        attributes: ["id", "name"]
      }
    ]
  }).then(event => res.send(event));
};
