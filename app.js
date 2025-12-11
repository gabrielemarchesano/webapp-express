const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");

const moviesRouter = require("./routes/movies")
const notFound = require("./middlewares/notFound");
const serverError = require("./middlewares/serverError");

// middleware for CORS
app.use(cors({
  origin: "http://localhost:5173"
}));

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

app.use(notFound);

app.use(serverError);