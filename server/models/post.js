const db = require("../dbConfig");

class Post {
	constructor(data) {
		this.id = data.id;
		this.title = data.title;
		this.user = data.user;
		this.body = data.body;
	}

	static get all() {
		return new Promise(async (resolve, reject) => {
			try {
				const postsData = db.query("SELECT * FROM posts");
				const posts = postsData.map(post => new Post(post));
				resolve(posts);
			} catch (error) {
				reject("Error retrieving posts");
			}
		});
	}
}

module.exports = Post;
