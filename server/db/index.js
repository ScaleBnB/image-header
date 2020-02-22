var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'carousel_images'
});

connection.connect();
module.exports = connection;
