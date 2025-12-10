function notFound(req, res, next){
  res.status(404);

  res.json({
    error: "Not found",
    message: "Cannot found the path you're searching"
  });
};

module.exports = notFound;