const Koa = require('koa');
const Router = require('koa-router');
const Logger = require('koa-logger');
const respond = require('koa-respond');
const globalErrorHandler = require('./global-error-handler');
const path = require('path');
const app = new Koa();
const router = new Router();
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const crossBrowserHandler = require('./cross-browser-handler');

app.use(globalErrorHandler);
// Add headers
//app.use(crossBrowserHandler);

if (process.env.NODE_ENV === 'development') {
  app.use(Logger());
}
app.use(serve(path.join(__dirname,'/build')));

app.use(respond());
app.use(bodyParser());
require('./routes')(router);
app.use(router.routes());
module.exports = app;
