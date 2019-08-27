const express = require("express");
const users = require("../users");

const router = express.Router();

router.get("/users", (req, res) => {
  res.json(users.list());
});

router.post("/users", (req, res) => {
  res.json(users.add(req.body));
});

router.get("/users/:id", (req, res) => {
  res.json(users.get(req.params.id));
});

router.put("/users/:id", (req, res) => {
  req.body.id = req.params.id;
  res.json(users.update(req.body));
});
router.delete("/users/:id", (req, res) => {
  res.json(users.delete(req.params.id));
});

module.exports = router;
