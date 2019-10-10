// Set up MySQL connection.
var mysql = require("mysql");
const util= require('util');
const express = require('express');
const app = express();



var connection = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "login_db"
});

// Make connection.
connection.getConnection((err, connection) =>{
    if (err)
        console.log('failed to connect to database');
    
    if (connection)
        console.log('connected to database')
        // connection.release();
        return;
})



connection.query = util.promisify(connection.query);

// Export connection for our ORM to use.
module.exports = connection;
