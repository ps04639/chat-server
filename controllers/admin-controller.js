const db = require("../db/index");

async function login(ctx) {
  try {
    const adminUsrName = ctx.query.user;
    const pwd = ctx.query.password;
    // const adminUsrName = `singh.amit@indecomm.net`;
    // const pwd = `letmein`;

    const encodedPwd = Buffer.from(pwd).toString("base64");
    const adminDetails = await db.sequelize.query(
      "execute sp_AdminLogin  '" + adminUsrName + "', '" + encodedPwd + "';"
    );
    console.log("adminDetails");
    console.log(adminDetails);
    ctx.ok({ data: adminDetails[0] });
  } catch (err) {
    console.error(err.message);
  }
}
module.exports = {
  login
};
