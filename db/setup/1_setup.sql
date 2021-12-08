DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title varchar,
    user varchar,
    post_body varchar
);