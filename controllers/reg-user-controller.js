const db = require("../db/index");

async function register(ctx) {
  const nameInput = ctx.request.body.nameInput;
  const emailId = ctx.request.body.emailIdInput;
  const emailIdInput = `[${emailId}]`;
  const ipAddressInput = ctx.request.body.ipAddressInput || 123;

ctx.res.setHeader('Access-Control-Allow-Origin', '*');
  await db.sequelize
    .query(
      "execute sp_RegisterUser " +
        nameInput +
        ", " +
        emailIdInput +
        ", " +
        ipAddressInput +
        ";"
    )
    .then(function(response) {
      ctx.ok(response[0]);
    })
    .error(function(err) {
      res.json(err);
    });
}

async function list(ctx) {
  const pageSize = ctx.query.pageSize;
  const currentPageNumber = ctx.query.currentPageNumber;
    ctx.res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const userList = await db.sequelize.query(
      "execute sp_GetUsers  '" + pageSize + "', '" + currentPageNumber + "';"
    );
    console.log("userList");
    console.log(userList);
    ctx.ok({ data: userList[0] });
  } catch (err) {
    log.error(err.message);
  }
}

async function userLog(ctx) {
  const pageSize = ctx.query.pageSize;
  const currentPageNumber = ctx.query.currentPageNumber;
  const userId = ctx.query.userId;
    ctx.res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const userLog = await db.sequelize.query(
      "execute sp_GetUserInputLog  '" +
        pageSize +
        "', '" +
        currentPageNumber +
        "','" +
        userId +
        "';"
    );
    console.log("userLog");
    console.log(userLog);
    ctx.ok({ data: userLog[0] });
  } catch (err) {
    log.error(err.message);
  }
}
module.exports = {
  register,
  list,
  userLog
};
