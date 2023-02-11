function checkLogin(req, res, next) {
  const token = req["headers"].authorization;
  if (!token) {
    return res.status(401).send("Unautorized! A token is required");
  } else if (token !== "secret") {
    return res.status(409).send("invalid token");
  }
  return next();
}

module.exports = { checkLogin };
