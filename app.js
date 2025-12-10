const express = require("express");
const app = express();
const PORT = 3000;

const connection = require("./database/connections");

const moviesRouter = require("./routes/movies")

// body parser
app.use(express.json());

//static assets folder
app.use(express.static("public"));


app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
})

app.get("/", (req, res) => {
  res.send("My MovieDB")
})

app.use("/api/movies", moviesRouter);