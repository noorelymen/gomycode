function isAdmin(req, res, next) {
  const auth = req["headers"].authorization;
  const tokenObj = JSON.parse(auth);

  if (!tokenObj) {
    return res.status(401).send("Unautorized!");
  } else if (!tokenObj.token) {
    console.log(tokenObj.token);
    return res.status(409).send("Token is required");
  } else if (tokenObj.token !== "secret") {
    return res.status(409).send("You're not logged in");
  } else {
    if (tokenObj.role !== "admin") {
      return res.status(409).send("You're not an admin");
    }
  }

  return next();
}

module.exports = { isAdmin };
