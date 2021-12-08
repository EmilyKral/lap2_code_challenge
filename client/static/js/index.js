const serverAPI = 'http://localhost:3000'
const postForm = document.querySelector('#post-form');
const output = document.querySelector('#output')

// Bind event listeners
postForm.addEventListener('submit', postEntry)

// render status
function display(message) {
    output.textContent = message;
    output.style.display = 'block';
}

// create post
async function createPost(postData) {
    try {
        const res = await axios.post(`${serverAPI}/posts/`, postData);
        window.location.href = `${serverAPI}/posts/${res.data.post.id}`;
    } catch(err) {
        display(`Oops! there was an issue: ${err.message}`);
    }
}

// submit post handler
function postEntry(e) {
    e.preventDefault()
    createPost(Object.fromEntries(new FormData(e.target).entries()))
}