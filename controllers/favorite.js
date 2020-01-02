const models = require("../models");
const Event = models.event;
const Favorite = models.favorites;
const User = models.user;

exports.store = (req, res) => {
    Favorite.create(req.body).then(favorite => {
        res.send({
            message: "success",
            favorite
        });
    });
};

exports.update = (req, res) => {
    Favorite.update(req.body, { where: { id: req.params.id } }).then(favorite => {
        res.send({
            message: "success",
            favorite
        });
    });
};


exports.show = (req, res) => {
    Favorite.findAll({
        where: { following_user: req.params.id },
        include: [
            {
                model: Event,
                as: "event",
                attributes: ["id", "title", "startTime", "price", "briefDesc", "img"],
            }
        ]
    }).then(event => res.send(event)).catch(err => res.send(err));
};