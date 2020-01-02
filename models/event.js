"use strict";
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define(
    "event",
    {
      title: DataTypes.STRING,
      category_id: DataTypes.INTEGER,
      startTime: DataTypes.DATE,
      endTime: DataTypes.DATE,
      price: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      briefDesc: DataTypes.STRING,
      address: DataTypes.TEXT,
      urlMaps: DataTypes.STRING,
      img: DataTypes.STRING,
      create_by: DataTypes.INTEGER
    },
    {}
  );
  event.associate = function (models) {
    event.belongsTo(models.category, {
      as: "category",
      foreignKey: "category_id"
    });
    event.belongsTo(models.user, {
      as: "createdBy",
      foreignKey: "create_by"
    });
    event.hasMany(models.order, {
      as: "event",
      foreignKey: "event_id"
    });
    // event.hasMany(models.favorite, {
    //   as: "event",
    //   foreignKey: "event_id"
    // });
  };
  return event;
};
