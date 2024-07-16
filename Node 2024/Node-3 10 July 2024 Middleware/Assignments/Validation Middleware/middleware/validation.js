const validationMiddleware = (req, res, next) => {
  const { ID, Name, Rating, Description, Genre, Cast } = req.body;

  const errors = [];

  if (typeof ID !== "number") errors.push("ID must be a number");
  if (typeof Name !== "string") errors.push("Name must be a string");
  if (typeof Rating !== "number") errors.push("Rating must be a number");
  if (typeof Description !== "string")
    errors.push("Description must be a string");
  if (typeof Genre !== "string") errors.push("Genre must be a string");
  if (!Array.isArray(Cast) || !Cast.every((c) => typeof c === "string")) {
    errors.push("Cast must be an array of strings");
  }
  if (errors.length > 0) {
    return res.status(400).json({
      message: "bad request. some data is incorrect.",
      errors,
    });
  }
  next();
};

module.exports = validationMiddleware