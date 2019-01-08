var mysql = require("mysql");


if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
var connection = mysql.createConnection({
  host: "her",
  port: 3306,
  user: "u1m93fwf0extov9z",
  password: "wbwdchrb2qcopvp4",
  database: "burgers_db"
});
}
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
