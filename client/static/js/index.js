const serverAPI = 'http://localhost:3000'
const postForm = document.querySelector('#post-form');
const output = document.querySelector('#output')

// Bind event listeners
postForm.addEventListener('submit', postEntry)


// create post
async function createPost(post) {
    try {
        const res = await axios.post(`${serverAPI}/posts/`, post)
        console.log(res.data)
    } catch(err) {
        output.textContent = `Oops! there was an issue: ${err.message}`;
        output.style.display = 'block';
    }
}

// submit post handler
function postEntry(e) {
    e.preventDefault()
    createPost(Object.fromEntries(new FormData(e.target).entries()))
}