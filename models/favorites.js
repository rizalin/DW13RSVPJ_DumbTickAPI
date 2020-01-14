'use strict';
module.exports = (sequelize, DataTypes) => {
  const favorites = sequelize.define('favorites', {
    event_id: DataTypes.INTEGER,
    following_user: DataTypes.INTEGER,
  }, {});
  favorites.associate = function (models) {
    favorites.belongsTo(models.event, {
      as: "event",
      foreignKey: "event_id"
    });
    favorites.belongsTo(models.user, {
      as: "favorite",
      foreignKey: "following_user"
    });
  };
  return favorites;
};