"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Sport",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Music",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Programming",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  }
};
