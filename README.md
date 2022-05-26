![sculterjs](https://user-images.githubusercontent.com/69193276/169705804-519a6084-df4a-422b-bd80-88f9a80b8388.png)
# Sculter.js
### New Sculter.js v1.0.0 for you
To create a program that can integrate with Node.js and MySQL, a lot of code needs to be written, and these codes are difficult for beginners to understand. But with Sculter.JS, you can significantly shorten the code you write in MySQL, and it will be much more understandable even for beginners. For example:
## Documentations
### Getting started
```
npm i sculter.js
```
```js
const sculter = require("sculter.js"); // importing sculter.js
let Connect = sculter.Connection; // declaring sculter connection
```
### Connecting MySQL
```js
const sculter = require("sculter.js"); // importing sculter.js
let Connect = sculter.Connection; // declaring sculter connection

new Connect(['localhost', 'username', 'password', 'database']); // connecting mysql
```
### Using `sql()` method
With the `sql()` method, you send SQL queries to MySQL.
```js
const sculter = require("sculter.js"); // importing sculter.js
let Connect = sculter.Connection; // declaring sculter connection

new Connect(['localhost', 'username', 'password', 'database']).sql(); // sending sql query
```
#### Creating database
```js
const sculter = require("sculter.js"); // importing sculter.js
let Connect = sculter.Connection; // declaring sculter connection

new Connect(['localhost', 'username', 'password']).sql("CREATE DATABASE mydb"); // creating database mydb

console.log("DB created");
```
#### Creating table
```js
const sculter = require("sculter.js"); // importing sculter.js
let Connect = sculter.Connection; // declaring sculter connection

new Connect(['localhost', 'username', 'password', 'mydb']).sql("CREATE TABLE customers"); // creating table customers

console.log("Table created");
```
#### Insert into
```js
const sculter = require("sculter.js"); // importing sculter.js
let Connect = sculter.Connection; // declaring sculter connection

new Connect(['localhost', 'username', 'password', 'mydb', 'customers' /* customers - table name */]).sql(["INSERT INTO customers (name, address) VALUES ?", [
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
]]); // insering data to table

console.log("Datas inserted");
```
#### Select from
```js
const sculter = require("sculter.js"); // importing sculter.js
let Connect = sculter.Connection; // declaring sculter connection

new Connect(['localhost', 'username', 'password', 'mydb']).sql("SELECT * FROM customers"); // getting data from table customers
```

#### Where
```js
const sculter = require("sculter.js"); // importing sculter.js
let Connect = sculter.Connection; // declaring sculter connection

new Connect(['localhost', 'username', 'password', 'mydb']).sql("SELECT * FROM customers WHERE address = 'Park Lane 38'"); // getting one row
```
#### Order by
```js
const sculter = require("sculter.js"); // importing sculter.js
let Connect = sculter.Connection; // declaring sculter connection

new Connect(['localhost', 'username', 'password', 'mydb']).sql("SELECT * FROM customers ORDER BY name"); // ordering by name
```
#### Delete
```js
const sculter = require("sculter.js"); // importing sculter.js
let Connect = sculter.Connection; // declaring sculter connection

new Connect(['localhost', 'username', 'password', 'mydb']).sql("DELETE FROM customers WHERE address = 'Mountain 21'"); // deleting one row
```
#### Drop table
```js
const sculter = require("sculter.js"); // importing sculter.js
let Connect = sculter.Connection; // declaring sculter connection

new Connect(['localhost', 'username', 'password', 'mydb']).sql("DROP TABLE customers"); // deleting table customers
```
#### Update
```js
const sculter = require("sculter.js"); // importing sculter.js
let Connect = sculter.Connection; // declaring sculter connection

new Connect(['localhost', 'username', 'password', 'mydb']).sql("UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'"); // updating data
```
#### Limit
```js
const sculter = require("sculter.js"); // importing sculter.js
let Connect = sculter.Connection; // declaring sculter connection

new Connect(['localhost', 'username', 'password', 'mydb']).sql("SELECT * FROM customers LIMIT 5"); // getting limited data
```
#### Join
```js
const sculter = require("sculter.js"); // importing sculter.js
let Connect = sculter.Connection; // declaring sculter connection

new Connect(['localhost', 'username', 'password', 'mydb']).sql("SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id"); // joining
```
