function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateUserMiddleware(req, res, next) {
  const { name, email, age } = req.body;

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return res.status(400).json({
      message: "Invalid 'name'. It must be a string with at least 2 characters.",
    });
  }

  if (!email || typeof email !== "string" || !isValidEmail(email)) {
    return res.status(400).json({
      message: "Invalid 'email'. Provide a valid email address.",
    });
  }

  if (
    age === undefined ||
    typeof age !== "number" ||
    Number.isNaN(age) ||
    age < 0 ||
    age > 120
  ) {
    return res.status(400).json({
      message: "Invalid 'age'. It must be a number between 0 and 120.",
    });
  }

  return next();
}

module.exports = validateUserMiddleware;
