const express = require("express");
const server = express();
const port = 7070;

server.use("/", (req, res) => {
    res.status(200).send("Root of the API is running...")
});

server.listen(port, () => {
    console.log(`API is running on port ${port}`)
});