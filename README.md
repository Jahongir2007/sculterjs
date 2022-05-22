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
The `Send` method has two object properties. These are `connect`, `sql`, `outTo` and `values`. Their use is as follows:
```js
const sculter = require("sculter.js");

sculter.send({
  connect, // connect property
  sql, // sql property
  outTo
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
### Using `outTo` propery
You can use the `outTo` property to output data. With `OutTo`, you can output data to a JavaScript console, files, and a web server. If the `outTo` property is not entered, the data will be output on the console.
```js
const sculter = require("sculter.js");

sculter.send({
  outTo: "" // exporting data
});
```
### Outputting data to JS console in `outTo` property
To output the data to the JavaScript console, you assign the `console` value to the` outTo` property.
```js
const sculter = require("sculter.js");

sculter.send({
  outTo: "console" // outputing data to JS console
});
```
### Outputting data to file in `outTo` property
To output the data to the file, you assign the `file` value to the` outTo` property and set filename to `file` property.
```js
const sculter = require("sculter.js");

sculter.send({
  outTo: "file", // outputing data to file
  file: "filename" // your file name to set data
});
```
### Outputting data to web server in `outTo` property
To output the data to the file, you assign the `server` value to the` outTo` property and set path to `path` property. You must set server port to `port` property
```js
const sculter = require("sculter.js");

sculter.send({
  outTo: "server", // outputing data to web server
  path: "/", // your web server path,
  port: 3000 // your server port
});
```
### Using `values` propery to inserting data to table
In the `values` property we write the data to be entered in the table. The structure of the `values` property is as follows:
```js
const sculter = require("sculter.js");

sculter.send({
  values: [
    [ "data" ]
  ]
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
### Getting data from table
We take the data from the `customers` table and use the `outTo` property to output the data to the JS console.
```js
const sculter = require("sculter.js");

sculter.send({
  connect: ["localhost", "username", "password", "mydb"], // connecting MySQL
  sql: "SELECT * FROM customers", // getting data from customers table
  outTo: "console" // output data to console
});
```
### Using SQL query `WHERE` in Sculter.JS
In SQL, the WHERE query is used to retrieve a single piece of data from a table. The full SQL code is available below:
```sql
SELECT * FROM customers WHERE address = 'Park Lane 38' -- The Park Lane 38 row of the table outputs the available data.
```
Now we will use these SQL codes in MySQL using Sculter.JS.
```js
const sculter = require("sculter.js");

sculter.send({
  connect: ["localhost", "username", "password", "mydb"], // connecting MySQL
  sql: "SELECT * FROM customers WHERE address = 'Park Lane 38'", // The Park Lane 38 row of the table outputs the available data.
  outTo: "console" // output data to console
});
```
### `ORDER BY` query in Sculter.js
Data can be sorted in SQL in a variety of ways. We output the data in the `customers` table in alphabetical order to the data in the `name` column.
```js
const sculter = require("sculter.js");

sculter.send({
  connect: ["localhost", "username", "password", "mydb"], // connecting MySQL
  sql: "SELECT * FROM customers ORDER BY name", // Displays the data in the name column in alphabetical order.
  outTo: "console" // output data to console
});
```
### In Sculter.JS, delete the row in the Table according to the information provided.
In SQL, you can delete a row that contains information from the table. It will be displayed with the query `WHERE`.
```sql
DELETE FROM customers WHERE address = 'Mountain 21' -- We delete the Mountain 21 information row
```
Now we will send the above codes to MySQL with Sculter.JS
```js
const sculter = require("sculter.js");

sculter.send({
  connect: ["localhost", "username", "password", "mydb"], // connecting MySQL
  sql: "DELETE FROM customers WHERE address = 'Mountain 21'", // We delete the Mountain 21 information rowDisplays the data in the name column in alphabetical order.
});

console.log("Success deleted");
```
### Droping database in Sculter.js
Delete the database called `testDB` in Sculter.JS.
```js
const sculter = require("sculter.js");

sculter.send({
  connect: ["localhost", "username", "password", "mydb"], // connecting MySQL
  sql: "DROP DATABASE testDB", // Deleting database.
});

console.log("Success deleted");
```
### Droping table in Sculter.js
Delete the table called `customers` in Sculter.JS.
```js
const sculter = require("sculter.js");

sculter.send({
  connect: ["localhost", "username", "password", "mydb"], // connecting MySQL
  sql: "DROP TABLE customers", // Deleting table.
});

console.log("Table deleted");
```
### Updating data from table in Sculter.js
Changing the address column from `"Valley 345"` to `"Canyon 123"`:
```js
const sculter = require("sculter.js");

sculter.send({
  connect: ["localhost", "username", "password", "mydb"], // connecting MySQL
  sql: "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'", // Changing data
});

console.log("Data changed");
```
### Limiting data in Sculter.JS
You can limit the number of records returned from the query, by using the `LIMIT` statement. Select the 5 first records in the "customers" table:
```js
const sculter = require("sculter.js");

sculter.send({
  connect: ["localhost", "username", "password", "mydb"], // connecting MySQL
  sql: "SELECT * FROM customers LIMIT 5", // Selecting 5 records
  outTo: "console" // output data to console
});
```
### Join two or more table in Sculter.js
You can combine rows from two or more tables, based on a related column between them, by using a JOIN statement. These two tables can be combined by using users' `favorite_product` field and products' `id` field. Select records with a match in both tables:
```js
const sculter = require("sculter.js");

sculter.send({
  connect: ["localhost", "username", "password", "mydb"], // connecting MySQL
  sql: "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id", // combining rows
  outTo: "console" // output data to console
});
```
