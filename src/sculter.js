var mysql = require('mysql');

function send(self){
  var con = mysql.createConnection({
    host: self['connect'][0],
    user: self['connect'][1],
    password: self['connect'][2],
    database: self['connect'][3]
  });
  
  con.connect(function(err) {
    if (err) throw err;
    // console.log("Connected!");
    con.query(self["sql"], function (err, result) {
      if (err) throw err;
      // console.log("Database created");
    });
  });
}

module.exports = {
  send
};
