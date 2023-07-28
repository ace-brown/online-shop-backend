const mysql = require("mysql2");

// Creating a pool of connections instead of a single connection, that allow us
// to reach out to pool whenever we have a query to run and onece the query is done
// wil be handed back into the pool, and pool can be finished when app is shut down
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "mysqlpassword",
});

// Use promise to help us handle asyn tasks
module.exports = pool.promise();
