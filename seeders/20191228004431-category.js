"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Sport",
          img: "https://iptvmasala.com/wp-content/uploads/2019/04/Sports-IPTV-m3u-playlist.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Music",
          img: "https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2018/03/03103805/big-concert-audience-listening-to-music-at-festival-picture-id485343244.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Science",
          img: "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/D7200921_meta_preregistration.jpg?itok=BqEqP2Ki",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Programming",
          img: "https://www.elegantthemes.com/blog/wp-content/uploads/2017/07/programming-languages-to-learn-for-wordpress-featured-image.png",
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
