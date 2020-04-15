/* Posts Sub-Route */

const express = require("express");
const db = require("../data/db");

const router = express.Router();

// POST -> Create a post
router.post("/", (req, res) => {
  sdf;
});
// GET -> Returns array of posts
router.get("/", async (req, res) => {
  try {
    const pst = await db.find();
    res.status(200).json(pst);
  } catch (err) {
    res.status(500).json({
      error: "The posts information could not be retrieved",
    });
  }
});
// GET -> Returns specific post
// DELETE -> Deletes post
// PUT -> Updates post

module.exports = router; // Export
