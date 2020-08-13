module.exports.getIdValidator = (req, res, next) => {
  let id = req.params.id;
  if (id) {
    next();
  } else {
    return res.status(400).json({ error: "id required in params" });
  }
};
