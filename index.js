require("express-group-routes");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "*");
  res.header("Access-Control-Allow-Method", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

const CategoriesController = require("./controllers/categories");
const EventController = require("./controllers/event");
const AuthController = require("./controllers/auth");
const OrderController = require("./controllers/order");
const UserController = require("./controllers/user");
const FavoriteController = require("./controllers/favorite")
const { authenticated } = require("./middleware");

app.group("/api/v1", router => {
  // login & register controller
  router.post("/login", AuthController.login);
  router.post("/register", AuthController.register);

  // CRUD for categories
  router.get("/categories", CategoriesController.index);
  router.get("/category/:id", CategoriesController.show);
  router.get("/category/:id/events", CategoriesController.byCategory);

  // CRUD for event
  router.get("/events", EventController.index);
  router.get("/event/:id", EventController.show);
  router.post("/event", authenticated, EventController.store);

  // CRUD for order
  router.post("/order", authenticated, OrderController.store);
  router.patch("/order/:id", authenticated, OrderController.update);
  router.get("/orders", authenticated, OrderController.index);
  router.get("/order/:id", authenticated, OrderController.show)

  // RU user
  router.get("/user/:id", authenticated, UserController.show);
  router.put("/user/:id", authenticated, UserController.update)

  // CR Favorite
  router.get("/favorite/user/:id", FavoriteController.show)
  router.post("/favorite", FavoriteController.store)

});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log("Listening..."));
