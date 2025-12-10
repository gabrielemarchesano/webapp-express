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

// show
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM movies WHERE id = ?";
  const sqlReviews = "SELECT id, name, vote, text FROM reviews WHERE movie_id = ?";

  connection.query(sql, [id], (err, results) => {
    if(err){
      return res.status(500).json({
        error: "Db query failed"
      });
    };

    if(results.length === 0){
      return res.status(404).json({
        error: true,
        message: "Movie not found"
      });
    };

    const movie = results[0];

    connection.query(sqlReviews, [id], (errReviews, resultsReviews) => {
      if(errReviews){
        return res.status(500).json({
        error: true,
        message: errReviews.message
        });
      };

      movie.reviews = resultsReviews;
      res.json(movie);
      console.log(movie);
    });

  })

})

module.exports = router;