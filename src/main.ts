import './style.css';

// query selectors
const input = document.querySelector('.input') as HTMLInputElement;
const div = document.querySelector('.div');
const submitButton = document.querySelector('.s-button');

let post: string = '';
const posts: string[] = [];

function inputHandler(e: InputEvent) {
  if (!e.target) return;

  post = (e.target as HTMLInputElement).value;
  inputToView();
}

function addPost(currentPost: string, e: Event) {
  e.preventDefault();
  posts.push(currentPost);
  console.log(posts);
  appendPosts();
  post = '';
  inputToView();
}

// event listeners
input!.addEventListener('input', inputHandler as EventListener);
input!.addEventListener('click', () => {
  input.value = '';
  post = '';
});
submitButton!.addEventListener('click', (e) => addPost(post, e));

// handle DOM input
function inputToView() {
  input.focus();
  if (!post) input.value = "What's on your mind ?";
  else {
    input!.value = post;
    div!.textContent = post;
  }
}

// handle DOM divs
function appendPosts() {
  if (posts.length > 0) {
    const newDiv = document.createElement('div');
    const currPostIndex = posts.length - 1;
    newDiv.textContent = posts[currPostIndex];
    console.log(currPostIndex);
    document.body.appendChild(newDiv);
  }
}

inputToView();
