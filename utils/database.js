const Sequelize = require("sequelize");

// Setup db connection pool thru sequelize
const sequelize = new Sequelize("node-complete", "root", "mysqlpassword", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
