const Router = require("koa-router");

const router = new Router();
const Ctrl = require("../controllers/reg-user-controller");

router.post("/register", Ctrl.register);
router.get("/list", Ctrl.list);
router.get("/log", Ctrl.userLog);
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});

module.exports = router.routes();
