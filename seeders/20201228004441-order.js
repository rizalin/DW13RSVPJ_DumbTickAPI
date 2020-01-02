'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('orders', [
      {
        event_id: 1,
        quantity: 1,
        totalPrice: 100000,
        status: "confirmed",
        attachment: null,
        ordered_by: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: 2,
        quantity: 2,
        totalPrice: 500000,
        status: "confirmed",
        attachment: null,
        ordered_by: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: 4,
        quantity: 2,
        totalPrice: 600000,
        status: "pending",
        attachment: null,
        ordered_by: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: 6,
        quantity: 2,
        totalPrice: 600000,
        status: "pending",
        attachment: null,
        ordered_by: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: 1,
        quantity: 4,
        totalPrice: 400000,
        status: "pending",
        attachment: null,
        ordered_by: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("orders", null, {});
  }
};
