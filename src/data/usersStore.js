const users = [
  { id: 1, name: "Ada Lovelace", email: "ada@example.com", age: 28 },
  { id: 2, name: "Alan Turing", email: "alan@example.com", age: 32 },
];

let nextId = 3;

function getAllUsers() {
  return users;
}

function getUserById(id) {
  return users.find((user) => user.id === id);
}

function createUser(userData) {
  const newUser = { id: nextId, ...userData };
  users.push(newUser);
  nextId += 1;
  return newUser;
}

function updateUser(id, userData) {
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    return null;
  }

  users[userIndex] = { id, ...userData };
  return users[userIndex];
}

function deleteUser(id) {
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    return false;
  }

  users.splice(userIndex, 1);
  return true;
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
