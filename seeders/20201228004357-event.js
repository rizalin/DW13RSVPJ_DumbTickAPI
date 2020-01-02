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
          price: 250000,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim lectus at velit tincidunt, non hendrerit tellus tincidunt. Nullam lacinia elit at est malesuada tempus. Vestibulum sit amet fermentum justo, vitae imperdiet massa. Sed in eros ultrices, porta lectus sit amet, lacinia libero. Nulla non turpis volutpat, egestas purus non, sodales velit. Integer vestibulum tincidunt viverra. Vivamus faucibus condimentum justo, vel posuere mi commodo eu. Suspendisse in nisi laoreet, blandit ex id, maximus tellus. Vivamus vestibulum eget ipsum a suscipit. Suspendisse non est tellus. Integer sit amet mi sapien. Aliquam erat volutpat. Phasellus pellentesque tellus ante, vitae vulputate metus scelerisque nec. Fusce sed fringilla ligula, non tempus neque. Aliquam sit amet dapibus ligula.",
          briefDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim lectus at velit tincidunt, non hendrerit tellus tincidunt. ",
          address:
            "Jl. Pintu Satu Senayan, Gelora, Tanahabang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270",
          urlmaps: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966.33708342044!2d106.80237531429312!3d-6.219203695497968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1577898731161!5m2!1sen!2sid",
          img: "https://i.pinimg.com/736x/cd/8f/7b/cd8f7bc84cc9fe27505dedae3a0d6ef6.jpg",
          create_by: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "fhana LIVE in Jakarta",
          category_id: 2,
          startTime: "2019-12-31 18:00:00",
          endTime: "2020-01-01 02:00:00",
          price: 250000,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim lectus at velit tincidunt, non hendrerit tellus tincidunt. Nullam lacinia elit at est malesuada tempus. Vestibulum sit amet fermentum justo, vitae imperdiet massa. Sed in eros ultrices, porta lectus sit amet, lacinia libero. Nulla non turpis volutpat, egestas purus non, sodales velit. Integer vestibulum tincidunt viverra. Vivamus faucibus condimentum justo, vel posuere mi commodo eu. Suspendisse in nisi laoreet, blandit ex id, maximus tellus. Vivamus vestibulum eget ipsum a suscipit. Suspendisse non est tellus. Integer sit amet mi sapien. Aliquam erat volutpat. Phasellus pellentesque tellus ante, vitae vulputate metus scelerisque nec. Fusce sed fringilla ligula, non tempus neque. Aliquam sit amet dapibus ligula.",
          briefDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim lectus at velit tincidunt, non hendrerit tellus tincidunt. ",
          address:
            "Jl. Pintu Satu Senayan, Gelora, Tanahabang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270",
          urlmaps: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966.33708342044!2d106.80237531429312!3d-6.219203695497968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1577898731161!5m2!1sen!2sid",
          img: "http://storage.jurnalotaku.com/wp-content/uploads/2017/07/c3-afaid-2017-fhana-fi-700x394.jpg",
          create_by: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Comic Frontier 16",
          category_id: 1,
          startTime: "2020-02-22 10:00:00",
          endTime: "2020-02-23 21:00:00",
          price: 0,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim lectus at velit tincidunt, non hendrerit tellus tincidunt. Nullam lacinia elit at est malesuada tempus. Vestibulum sit amet fermentum justo, vitae imperdiet massa. Sed in eros ultrices, porta lectus sit amet, lacinia libero. Nulla non turpis volutpat, egestas purus non, sodales velit. Integer vestibulum tincidunt viverra. Vivamus faucibus condimentum justo, vel posuere mi commodo eu. Suspendisse in nisi laoreet, blandit ex id, maximus tellus. Vivamus vestibulum eget ipsum a suscipit. Suspendisse non est tellus. Integer sit amet mi sapien. Aliquam erat volutpat. Phasellus pellentesque tellus ante, vitae vulputate metus scelerisque nec. Fusce sed fringilla ligula, non tempus neque. Aliquam sit amet dapibus ligula.",
          briefDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim lectus at velit tincidunt, non hendrerit tellus tincidunt. ",
          address:
            "Jl. Pintu Satu Senayan, Gelora, Tanahabang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270",
          urlmaps: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966.33708342044!2d106.80237531429312!3d-6.219203695497968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1577898731161!5m2!1sen!2sid",
          img: "https://pbs.twimg.com/media/ELFzAbTU0AE-aGx.jpg",
          create_by: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Foster the People",
          category_id: 2,
          startTime: "2020-02-22 10:00:00",
          endTime: "2020-02-23 21:00:00",
          price: 300000,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim lectus at velit tincidunt, non hendrerit tellus tincidunt. Nullam lacinia elit at est malesuada tempus. Vestibulum sit amet fermentum justo, vitae imperdiet massa. Sed in eros ultrices, porta lectus sit amet, lacinia libero. Nulla non turpis volutpat, egestas purus non, sodales velit. Integer vestibulum tincidunt viverra. Vivamus faucibus condimentum justo, vel posuere mi commodo eu. Suspendisse in nisi laoreet, blandit ex id, maximus tellus. Vivamus vestibulum eget ipsum a suscipit. Suspendisse non est tellus. Integer sit amet mi sapien. Aliquam erat volutpat. Phasellus pellentesque tellus ante, vitae vulputate metus scelerisque nec. Fusce sed fringilla ligula, non tempus neque. Aliquam sit amet dapibus ligula.",
          briefDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim lectus at velit tincidunt, non hendrerit tellus tincidunt. ",
          address:
            "Jl. Pintu Satu Senayan, Gelora, Tanahabang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270",
          urlmaps: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966.33708342044!2d106.80237531429312!3d-6.219203695497968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1577898731161!5m2!1sen!2sid",
          img: "https://www.billboardmusicawards.com/wp-content/uploads/2019/04/Foster-The-People.jpg",
          create_by: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Awesome City Club",
          category_id: 2,
          startTime: "2020-02-22 10:00:00",
          endTime: "2020-02-23 21:00:00",
          price: 250000,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim lectus at velit tincidunt, non hendrerit tellus tincidunt. Nullam lacinia elit at est malesuada tempus. Vestibulum sit amet fermentum justo, vitae imperdiet massa. Sed in eros ultrices, porta lectus sit amet, lacinia libero. Nulla non turpis volutpat, egestas purus non, sodales velit. Integer vestibulum tincidunt viverra. Vivamus faucibus condimentum justo, vel posuere mi commodo eu. Suspendisse in nisi laoreet, blandit ex id, maximus tellus. Vivamus vestibulum eget ipsum a suscipit. Suspendisse non est tellus. Integer sit amet mi sapien. Aliquam erat volutpat. Phasellus pellentesque tellus ante, vitae vulputate metus scelerisque nec. Fusce sed fringilla ligula, non tempus neque. Aliquam sit amet dapibus ligula.",
          briefDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim lectus at velit tincidunt, non hendrerit tellus tincidunt. ",
          address:
            "Jl. Pintu Satu Senayan, Gelora, Tanahabang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270",
          urlmaps: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966.33708342044!2d106.80237531429312!3d-6.219203695497968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1577898731161!5m2!1sen!2sid",
          img: "https://realsound.jp/wp-content/uploads/2017/05/20170206-acc.jpg",
          create_by: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "SHISHAMO",
          category_id: 2,
          startTime: "2020-02-22 10:00:00",
          endTime: "2020-02-23 21:00:00",
          price: 300000,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim lectus at velit tincidunt, non hendrerit tellus tincidunt. Nullam lacinia elit at est malesuada tempus. Vestibulum sit amet fermentum justo, vitae imperdiet massa. Sed in eros ultrices, porta lectus sit amet, lacinia libero. Nulla non turpis volutpat, egestas purus non, sodales velit. Integer vestibulum tincidunt viverra. Vivamus faucibus condimentum justo, vel posuere mi commodo eu. Suspendisse in nisi laoreet, blandit ex id, maximus tellus. Vivamus vestibulum eget ipsum a suscipit. Suspendisse non est tellus. Integer sit amet mi sapien. Aliquam erat volutpat. Phasellus pellentesque tellus ante, vitae vulputate metus scelerisque nec. Fusce sed fringilla ligula, non tempus neque. Aliquam sit amet dapibus ligula.",
          briefDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim lectus at velit tincidunt, non hendrerit tellus tincidunt. ",
          address:
            "Jl. Pintu Satu Senayan, Gelora, Tanahabang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270",
          urlmaps: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966.33708342044!2d106.80237531429312!3d-6.219203695497968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1577898731161!5m2!1sen!2sid",
          img: "http://www.syncmusic.jp/wordpress/wp-content/uploads/2015/07/SHISHAMO.jpg",
          create_by: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("events", null, {});
  }
};
