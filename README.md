# Sculter.js
With Sculter.JS you can reduce the code of programs that work with MySQL.

Creating database in Node.js MySQL
```js
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
```
Creating database in Node.js MySQL + Sculter.js
```js
const sculter = require("sculter");

sculter.send({
  connect: ["localhost", "yourusername", "yourpassword"],
  sql: "CREATE DATABASE mydb"
});

console.log("Database created");
```
