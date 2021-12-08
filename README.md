# LAP 2 Code Challenge

A simple web application where a user can write posts and view the posts they have published. Once
the post is published, the client connects to an express server. The posts are stored in a database
and can be accessed via a unique link. This project was done as a part of LAP 2 of futureproof's
Conway cohort.

## Installation and Usage

- Clone the repo
- Navigate to the created folder
- Run `docker compose up` to start the server and host the client-side
- The server is hosted at http://localhost:3000
- The client side is hosted at http://localhost:8080
- Once finished, run `docker compose down --volumes --remove-orphans`

## Challenges and Achievements

- Rendering the posts from the server side was a challenge but we found that we could use EJS which
  made things a lot simpler
- We worked together efficiently to meet the requirements of the task
