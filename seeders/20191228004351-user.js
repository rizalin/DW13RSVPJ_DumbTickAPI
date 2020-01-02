"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Natsume Kokoro",
          username: "Kokkoro",
          password: "arujisama",
          phoneNumber: "081200001111",
          email: "arujisama@guguru.com",
          img:
            "https://sigmaestimates.com/wp-content/uploads/sites/2/2018/10/person-placeholder-1.png",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
