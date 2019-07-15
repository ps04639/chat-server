const Router = require("koa-router");

const router = new Router();

const Ctrl = require("../controllers/question-controller");

router.get("/update", Ctrl.updateQues);
//router.get('/register/', Ctrl.register);

module.exports = router.routes();
