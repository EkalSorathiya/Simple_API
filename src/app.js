const express = require("express");
const morgan = require("morgan");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    message: "Simple API is running.",
    docs: "Use /users endpoints for CRUD operations.",
  });
});

app.use("/users", userRoutes);

app.use(errorHandler);

module.exports = app;
