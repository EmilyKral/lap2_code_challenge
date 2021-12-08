const express = require("express");
const router = express.Router();

const Post = require("../models/post");

router.get("/", async (req, res) => {
	try {
		const posts = await Post.all;
		res.status(200).json({ posts });
	} catch (error) {
		res.status(500).json({ error });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const post = await Post.findById(parseInt(req.params.id));
		res.status(200).json({ post });
	} catch (error) {
		res.status(404).json({ error });
	}
});

router.post("/", async (req, res) => {
	try {
		const post = await Post.create(req.body.title, req.body.username, req.body.post_body);
		res.status(201).json({ post });
	} catch (error) {
		res.status(422).json({ error });
	}
});

module.exports = router;
