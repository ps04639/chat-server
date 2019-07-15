const bot = require("./bot");
const question = require("./question");
const register = require("./register");
const admin = require("./admin");

module.exports = router => {
  router.use("/response", bot);
  router.use("/user", register);
  router.use("/questions", question);
  router.use("/admin", admin);
  router.use("*", register);
};
