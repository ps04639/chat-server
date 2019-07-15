const Router = require('koa-router');

const router = new Router();

const Ctrl = require('../controllers/bot-controller');

router.get('/', Ctrl.getResponse);
//router.get('/register/', Ctrl.register);

module.exports = router.routes();
