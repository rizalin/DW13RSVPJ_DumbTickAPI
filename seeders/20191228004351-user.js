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
          DoB: "2008-05-11",
          img:
            "https://sigmaestimates.com/wp-content/uploads/sites/2/2018/10/person-placeholder-1.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Momochi Kiruya",
          username: "Tsuncat",
          password: "tsuntsun",
          phoneNumber: "081200009999",
          email: "arujisama@guguru.com",
          DoB: "2005-09-02",
          img:
            "https://livedoor.blogimg.jp/anibuhi/imgs/1/e/1e77636b.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Illyasviel von Einsbern",
          username: "illya",
          password: "oniichan",
          phoneNumber: "081200001111",
          email: "basatkahatuyo@guguru.com",
          DoB: "2008-11-20",
          img:
            "https://sigmaestimates.com/wp-content/uploads/sites/2/2018/10/person-placeholder-1.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sakurai Momoka",
          username: "chama",
          password: "pchama",
          phoneNumber: "081233334444",
          email: "chamaxchama@guguru.com",
          DoB: "2007-04-08",
          img:
            "https://sigmaestimates.com/wp-content/uploads/sites/2/2018/10/person-placeholder-1.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
