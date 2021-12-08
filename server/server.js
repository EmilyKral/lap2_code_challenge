const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());

const path = require("path");
server.set("views", path.join(__dirname, "views")); // creates a path to the views directory
server.set("view engine", "ejs");

const postRoutes = require("./controllers/posts");
server.use("/posts", postRoutes);

server.get("/", (req, res) => res.send("Hello, world!"));

module.exports = server;
