function authMiddleware(req, res, next) {
  const apiKey = req.header("x-api-key");
  const expectedApiKey = process.env.API_KEY || "classroom-secret";

  if (!apiKey || apiKey !== expectedApiKey) {
    return res.status(401).json({
      message: "Unauthorized. Provide a valid x-api-key header.",
    });
  }

  return next();
}

module.exports = authMiddleware;
