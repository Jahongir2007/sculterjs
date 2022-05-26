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

new Connect(['localhost', 'username', 'password', 'database']).sql("CREATE DATABASE mydb"); // sending sql query

console.log("DB created")
```
