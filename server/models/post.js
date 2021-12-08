const db = require("../db_config/config");

class Post {
	constructor(data) {
		this.id = data.id;
		this.title = data.title;
		this.username = data.username;
		this.post_body = data.post_body;
	}

	static get all() {
		return new Promise(async (resolve, reject) => {
			try {
				const postsData = await db.query(`SELECT * FROM posts;`);
				const posts = postsData.rows.map(post => new Post(post));
				resolve(posts);
			} catch (error) {
				reject("Error retrieving posts");
			}
		});
	}

	static findById(id) {
		return new Promise(async (resolve, reject) => {
			try {
				const postData = await db.query(`SELECT * FROM posts WHERE id = $1;`, [id]);
				const post = new Post(postData.rows[0]);
				resolve(post);
			} catch (error) {
				reject("Error retrieving post");
			}
		});
	}

	static create(title, username, post_body) {
		return new Promise(async (resolve, reject) => {
			try {
				const postData = await db.query(
					`INSERT INTO posts (title, username, post_body) VALUES ($1 $2 $3) RETURNING *;`,
					[title, username, post_body]
				);
				const post = new Post(postData.rows[0]);
				resolve(post);
			} catch (error) {
				reject("Error creating post");
			}
		});
	}
}

module.exports = Post;
