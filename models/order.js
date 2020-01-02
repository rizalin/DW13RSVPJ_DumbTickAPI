"use strict";
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      event_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      totalPrice: DataTypes.INTEGER,
      status: DataTypes.STRING,
      attachment: DataTypes.STRING,
      ordered_by: DataTypes.INTEGER
    },
    {}
  );
  order.associate = function (models) {
    order.belongsTo(models.event, {
      as: "event",
      foreignKey: "event_id"
    });
    order.belongsTo(models.user, {
      as: "orderedBy",
      foreignKey: "ordered_by"
    });

  };
  return order;
};
