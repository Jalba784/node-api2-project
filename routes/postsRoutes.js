/* Posts Sub-Route */

const express = require("express");
const db = require("../data/db");

const router = express.Router();

// POST -> Create a post
// GET -> Returns array of posts
router.get("/", (req, res) => {
    const pst = db.find();
    res.status(200).json(pst)
});
// GET -> Returns specific post
// DELETE -> Deletes post
// PUT -> Updates post


module.exports = router; // Export