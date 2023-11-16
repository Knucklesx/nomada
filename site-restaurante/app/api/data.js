// import mysql from 'mysql2';
const mysql = require('mysql2');

export default (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'restaurante'
  });

  connection.query('SELECT * FROM Prato', function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  });

  connection.end();
};