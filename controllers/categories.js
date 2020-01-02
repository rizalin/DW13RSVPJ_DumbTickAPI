const models = require("../models");
const Category = models.category;
const Event = models.event;
const User = models.user;

exports.index = (req, res) => {
  Category.findAll().then(categories => res.send(categories));
};

exports.show = (req, res) => {
  Category.findOne({ where: { id: req.params.id } }).then(categories =>
    res.send(categories)
  );
};

exports.byCategory = (req, res) => {
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
    ],
    where: { category_id: req.params.id }
  }).then(articles => res.send(articles));
};
