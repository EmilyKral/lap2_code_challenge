const serverAPI = 'http://localhost:3000'
const postForm = document.querySelector('#post-form');
const output = document.querySelector('#output')
const dataButton = document.querySelector('#data-button')

// Bind event listeners
postForm.addEventListener('submit', postEntry)
dataButton.addEventListener('click', getData)

async function getAllData() {
    try {
        const res = await axios.get(`${serverAPI}/posts`)
        console.log(res.data)
    } catch(err) {
        output.textContent = err.message;
    }
}

function getData(e) {
   getAllData();
}

// create post
async function createPost(post) {
    try {
        const res = await axios.post(`${serverAPI}/posts/create`, post)
        output.textContent = 'Post submitted';
    } catch(err) {
        output.textContent = err.message;
    }
}

// submit post handler
function postEntry(e) {
    e.preventDefault()
    createPost(Object.fromEntries(new FormData(e.target).entries()))
}