# Sculter.js
To create a program that can integrate with Node.js and MySQL, a lot of code needs to be written, and these codes are difficult for beginners to understand. But with Sculter.JS, you can significantly shorten the code you write in MySQL, and it will be much more understandable even for beginners. For example:

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
const sculter = require("sculter.js");

sculter.send({
  connect: ["localhost", "yourusername", "yourpassword"],
  sql: "CREATE DATABASE mydb"
});

console.log("Database created");
```
## Documentations
### Getting started
```
$ npm install sculter.js
```
### Linking Sculter.JS
Linking a JavaScript file to Sculter.JS is as follows:
```js
const sculter = require("sculter.js"); // Linking sculter.js
```
### Using `send()` method
