/* Root Route */

const express = require("express");
const server = express();
const port = 7070;

// Importing Sub-Routes
const postRoutes = require("../routes/postsRoutes");

// Using Sub-Routes
server.use("/posts", postRoutes);

// Root
server.use("/", (req, res) => {
    res.status(200).send("Root of the API is running...")
});

server.listen(port, () => {
    console.log(`API is running on port ${port}`)
});