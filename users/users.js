const fs = require("fs");
const path = require("path");

var users = require("./usersDb");

const save = () => {
  fs.writeFileSync(
    path.join(__dirname, "usersDb.json"),
    JSON.stringify(users, null, 4)
  );
};

const copy = obj => JSON.parse(JSON.stringify(obj));

const getNextId = () => {
  var lastUser = users[users.length - 1];

  return lastUser ? lastUser.id + 1 : 1;
};

const findUserById = id => {
  var user = null;
  id = parseInt(id);

  users.every(u => {
    if (u.id === id) {
      user = u;
      return false;
    }

    return true;
  });

  return user;
};

const addUser = userData => {
  userData.id = getNextId();

  users.push(userData);

  save();

  return getUser(userData.id);
};

const getUser = id => copy(findUserById(id));

const updateUser = userData => {
  var user = findUserById(userData.id);

  delete userData.id;

  Object.assign(user, userData);

  save();

  return getUser(user.id);
};

const deleteUser = id => {
  var user = findUserById(id),
    index = users.indexOf(user);

  users.splice(index, 1);

  save();

  return copy(user);
};

const listUsers = () => copy(users);

module.exports = {
  add: addUser,
  get: getUser,
  update: updateUser,
  delete: deleteUser,
  list: listUsers
};
