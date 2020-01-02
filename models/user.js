'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    img: DataTypes.STRING,
    DoB: DataTypes.DATE
  }, {});
  user.associate = function (models) {
    // user.hasMany(models.favorite, {
    //   as: "favorite",
    //   foreignKey: "user_id"
    // });
  };
  return user;
};