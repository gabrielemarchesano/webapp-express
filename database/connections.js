const mysql2 = require("mysql2");
const connection = mysql2.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

connection.connect((err) => {
  if(err){
    console.log(err.stack);
    throw err.message;
  };
  
  console.log("Connection to the DB successful");
});

module.exports = connection;