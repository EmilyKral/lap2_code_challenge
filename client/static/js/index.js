const serverAPI = 'http://localhost:3000'
const postForm = document.querySelector('#post-form');
const displayOutput = document.querySelector('#display-output')
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
        const postLink = `${serverAPI}/posts/${res.data.post.id}`;
        const anchor = document.createElement('a');
        anchor.setAttribute('href', postLink);
        anchor.innerText = postLink;
        displayOutput.appendChild(anchor);
        display(`Your post has been created, check out the link!`)
    } catch(err) {
        display(`Oops! there was an issue: ${err.message}`);
    }
}

// submit post handler
function postEntry(e) {
    e.preventDefault()
    createPost(Object.fromEntries(new FormData(e.target).entries()))
}