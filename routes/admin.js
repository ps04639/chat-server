const Router = require("koa-router");

const router = new Router();

const Ctrl = require("../controllers/admin-controller");

router.get("/", Ctrl.login);

module.exports = router.routes();
