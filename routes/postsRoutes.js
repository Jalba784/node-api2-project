/* Posts Sub-Route */

const express = require("express");
const db = require("../data/db");

const router = express.Router();

// POST -> Create a post
router.post("/", async (req, res) => {
  if (!req.body.title || !req.body.contents) {
    return res.status(400).json({
      errorMessage: "Please provide title and contents for the post."
    });
  }
  try {
    const post = await db.insert(req.body);
    const newlyAddedPost = await db.findById(post.id);
    res.status(201).json(newlyAddedPost);
  } catch (err) {
    console.log(`Error => ${err}`);
    res.status(500).json({
      error: "There was an error while saving the post to the database"
    });
  }
});
// GET -> Returns array of posts
router.get("/", async (req, res) => {
  try {
    const pst = await db.find();
    res.status(200).json(pst);
  } catch (err) {
    console.log(`Error => ${err}`);
    res.status(500).json({
      error: "The posts information could not be retrieved"
    });
  }
});
// GET -> Returns specific post
router.get("/:id", async (req, res) => {
  const specId = await db.findById(req.params.id);
  try {
    if (!specId) {
      return res.status(404).json({
        message: "The post with the specified ID does not exist."
      });
    } else {
      return res.status(200).json(specId);
    }
  } catch (err) {
    console.log(`Error => ${err}`);
    res.status(500).json({
      error: "The post information could not be retrieved."
    });
  }
});
// DELETE -> Deletes post
router.delete("/:id", async (req, res) => {
  const deleteId = await db.findById(req.params.id);
  try {
    if (!deleteId) {
      return res.status(404).json({
        message: "The post with the specified ID does not exist."
      });
    } else {
      await db.remove(req.params.id);
      res.status(200).end();
    }
  } catch (err) {
    res.status(500).json({
      error: "The post could not be removed"
    });
  }
});
// PUT -> Updates post
router.put("/:id", async (req, res) => {
  const postId = await db.findById(req.params.id);
  if (!req.body.title || !req.body.contents) {
    return res.status(400).json({
      errorMessage: "Please provide title and contents for the post."
    });
  }
  try {
    if (!postId) {
      return req.status(404).json({
        message: "The post with the specified ID does not exist."
      });
    } else {
      const updatedPost = await db.update(req.params.id, {
        title: req.body.title,
        contents: req.body.contents
      });
      res.status(200).json(postId);
    }
  } catch (err) {
    res.status(500).json({
      error: "The post information could not be modified."
    });
  }
});

module.exports = router; // Export
