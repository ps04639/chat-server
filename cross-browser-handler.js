
const path = require('path');
//const createBunyanLogger = require('./bunyan-logger-util');

//const log = createBunyanLogger(path.basename(__filename));

async function crossBrowserHandler(ctx, next) {
  try {
  // Website you wish to allow to connect
    ctx.res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    ctx.res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    ctx.res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    ctx.res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    //next();
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    //log.error(err);
	console.log(err);
  }
}

module.exports = crossBrowserHandler;