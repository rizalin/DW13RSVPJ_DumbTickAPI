"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "events",
      [
        {
          title: "2019 New Year Party",
          category_id: 2,
          startTime: "2019-12-31 18:00:00",
          endTime: "2020-01-01 02:00:00",
          price: 100000,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim lectus at velit tincidunt, non hendrerit tellus tincidunt. Nullam lacinia elit at est malesuada tempus. Vestibulum sit amet fermentum justo, vitae imperdiet massa. Sed in eros ultrices, porta lectus sit amet, lacinia libero. Nulla non turpis volutpat, egestas purus non, sodales velit. Integer vestibulum tincidunt viverra. Vivamus faucibus condimentum justo, vel posuere mi commodo eu. Suspendisse in nisi laoreet, blandit ex id, maximus tellus. Vivamus vestibulum eget ipsum a suscipit. Suspendisse non est tellus. Integer sit amet mi sapien. Aliquam erat volutpat. Phasellus pellentesque tellus ante, vitae vulputate metus scelerisque nec. Fusce sed fringilla ligula, non tempus neque. Aliquam sit amet dapibus ligula.",
          briefDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim lectus at velit tincidunt, non hendrerit tellus tincidunt. ",
          address:
            "Jl. Pintu Satu Senayan, Gelora, Tanahabang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270",
          urlmaps: "ini link",
          img: "https://via.placeholder.com/1280x500.png?text=Ini+gambar",
          create_by: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("events", null, {});
  }
};
