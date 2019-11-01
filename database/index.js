const mysql = require('mysql');
const Promise = require('bluebird');

const db = mysql.createConnection({
  // host: 'mysql', // for docker network
  host: 'localhost',
  user: 'root',
  password: process.env.HR_SYSTEM_DESIGN_MYSQL_PASSWORD,
  database: 'playbar',
});

Promise.promisifyAll(db);

module.exports = db;
