const mainRoute = require("./main/main");
const signUpRoute = require("./users/signUpRoute");
const productRoute = require("./products/productRoute");

const router = {
  "/signup": signUpRoute,
  "/products": productRoute,
  "/": mainRoute,
  default: mainRoute
};

module.exports = router;
