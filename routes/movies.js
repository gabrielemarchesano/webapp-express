const express = require("express");
const router = express.Router();
const connection = require("../database/connections");

// index
router.get("/", (req, res) => {
  const sql = "SELECT * FROM movies";

  connection.query(sql, (err, results) => {
    if(err){
      return res.status(500).json({
        error: "DB query failed"
      });
    };
    
    res.json(results);
    console.log(results);
  })
})

module.exports = router;