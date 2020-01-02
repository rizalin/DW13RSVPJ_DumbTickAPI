'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('favorites', [
      {
        event_id: 1,
        following_user: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: 3,
        following_user: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: 2,
        following_user: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: 4,
        following_user: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: 3,
        following_user: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("favorites", null, {});
  }
};
