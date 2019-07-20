var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3336,
  host: "localhost",
  user: "root",
  password: "Tomorrow1074",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + connection.threadId);
});

module.exports = connection;
