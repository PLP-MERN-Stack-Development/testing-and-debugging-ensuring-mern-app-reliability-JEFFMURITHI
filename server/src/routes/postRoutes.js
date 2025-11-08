const express = require("express");
const router = express.Router();

// Example CRUD routes for posts
router.get("/", (req, res) => {
  res.json({ message: "Get all posts" });
});

router.post("/", (req, res) => {
  res.json({ message: "Create a new post" });
});

router.put("/:id", (req, res) => {
  res.json({ message: `Update post ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.json({ message: `Delete post ${req.params.id}` });
});

module.exports = router;
