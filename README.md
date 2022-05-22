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
There is only one method in Sculter.JS. It is also the `send()` method. The `Send` method is used as an object.
```js
const sculter = require("sculter.js");

sculter.send({}); // Using send method
```
### Properties of the `Send` method
The `Send` method has two object properties. These are `connect` and` sql`. Their use is as follows:
```js
const sculter = require("sculter.js");

sculter.send({
  connect, // connect property
  sql // sql property
});
```
### Using `connect` property
The `connect` property is used to connect to a MySQL database. It takes a value in an array. The array must contain 3 or 4 values.
```js
const sculter = require("sculter.js");

sculter.send({
  connect: ["localhost", "username", "password"] // connect property
});
```
Properties of `connect`:
- `"localhost"` MySQL server
- `"username"` MySQL username
- `"password"` MySQL password
- `"dbname"` MySQL database
### Using `sql` property
You can use the `sql` property to send SQL queries to MySQL. Below you will learn how to use the `sql` property.
```js
const sculter = require("sculter.js");

sculter.send({
  sql: "" // sending SQL query to MySQL
});
```
### Creating database in Sculter.JS
We create a MySQL database with Sculter.js.
```js
const sculter = require("sculter.js") // linking sculter.js

sculter.send({
  connect: ["localhost", "username", "password"], // connecting MySQL
  sql: "CREATE DATABASE mydb" // sending SQL query to MySQL
});

console.log("Database created");
```
`mydb` is the name of the database we created.  In the `sql` property we enter queries in the SQL programming language.
```sql
CREATE DATABASE mydb -- is also a SQL query.
``` 
### Creating table in Sculter.js
Above we have created a database called `mydb`, now we will create a table called` customers`.
```js
const sculter = require("sculter.js") // linking sculter.js

sculter.send({
  connect: ["localhost", "username", "password", "mydb"], // connecting MySQL
  sql: "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))" // sending SQL query to MySQL
});

console.log("Table created");
```
```sql
CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255)) -- SQL query for creating table
```
### Insert Into in Sculter.js
Enter data into our `customers` table.
```js
const sculter = require("sculter.js") // linking sculter.js

sculter.send({
  connect: ["localhost", "username", "password", "mydb"], // connecting MySQL
  sql: "INSERT INTO customers (name, address) VALUES ?", // sending SQL query to MySQL
  values: [ // data for table
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
  ]
});

console.log("Records saved");
```
You must use the `values` property of Sculter.JS to enter one data or more than one data in a table at a time.
