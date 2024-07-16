const validator = (req, res, next) => {
  if (req.body.email && req.body.email.endsWith("@gmail.com")) {
    next();
  } else {
    res.json({ message: "email is not valid" });
  }
};

module.exports = validator;
