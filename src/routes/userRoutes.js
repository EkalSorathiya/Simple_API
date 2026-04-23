const express = require("express");
const validateUserMiddleware = require("../middleware/validateUserMiddleware");
const authMiddleware = require("../middleware/authMiddleware");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../data/usersStore");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(getAllUsers());
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = getUserById(id);

  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  return res.json(user);
});

router.post("/", authMiddleware, validateUserMiddleware, (req, res) => {
  const newUser = createUser(req.body);
  res.status(201).json(newUser);
});

router.put("/:id", authMiddleware, validateUserMiddleware, (req, res) => {
  const id = Number(req.params.id);
  const updatedUser = updateUser(id, req.body);

  if (!updatedUser) {
    return res.status(404).json({ message: "User not found." });
  }

  return res.json(updatedUser);
});

router.delete("/:id", authMiddleware, (req, res) => {
  const id = Number(req.params.id);
  const deleted = deleteUser(id);

  if (!deleted) {
    return res.status(404).json({ message: "User not found." });
  }

  return res.status(204).send();
});

module.exports = router;
