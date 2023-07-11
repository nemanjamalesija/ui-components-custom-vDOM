import './style.css';

// // query selectors
// const input = document.querySelector('.input') as HTMLInputElement;
// const div = document.querySelector('.div');
// const submitButton = document.querySelector('.s-button');

// let post: string = '';
// const posts: string[] = [];

// function inputHandler(e: InputEvent) {
//   if (!e.target) return;

//   post = (e.target as HTMLInputElement).value;
//   inputToView();
// }

// function addPost(currentPost: string, e: Event) {
//   e.preventDefault();
//   posts.push(currentPost);
//   console.log(posts);
//   appendPosts();
//   post = '';
//   inputToView();
// }

// // event listeners
// input!.addEventListener('input', inputHandler as EventListener);
// input!.addEventListener('click', () => {
//   input.value = '';
//   post = '';
// });
// submitButton!.addEventListener('click', (e) => addPost(post, e));

// // handle DOM input
// function inputToView() {
//   input.focus();
//   if (!post) input.value = "What's on your mind ?";
//   else {
//     input!.value = post;
//     div!.textContent = post;
//   }
// }

// // handle DOM divs
// function appendPosts() {
//   if (posts.length > 0) {
//     const newDiv = document.createElement('div');
//     const currPostIndex = posts.length - 1;
//     newDiv.textContent = posts[currPostIndex];
//     console.log(currPostIndex);
//     document.body.appendChild(newDiv);
//   }
// }

// inputToView();

let post = '';

function inputHandler(e: InputEvent) {
  if (!e.target) return;

  post = (e.target as HTMLInputElement).value;
}
function createVDOM() {
  const inputInfo = ['input', post, inputHandler];
  const divInfo = ['div', `Post displayed: ${post}`];

  return [inputInfo, divInfo];
}

function updateDOM() {
  const vDOM = createVDOM();
  const actualDOM = vDOM.map(convert);
  document.body.replaceChildren(...actualDOM);

  const jsInputDOM = actualDOM.find(
    (element) => element instanceof HTMLInputElement
  ) as HTMLInputElement;
  if (jsInputDOM) {
    jsInputDOM.focus();
  }
}

function convert(vDOM: any[]) {
  if (vDOM[0] === 'input') {
    const elem = document.createElement(vDOM[0]);
    elem.value = vDOM[1];
    elem.addEventListener('input', inputHandler as EventListener);
    return elem;
  }
  if (vDOM[0] === 'div') {
    const elem = document.createElement(vDOM[0]);
    elem.textContent = vDOM[1];
    return elem;
  } else return;
}

// setInterval(updateDOM, 15);

// jsInput = document.createElement('input');
// jsDiv = post == 'Will' ? '' : document.createElement('div');
// jsInput.value = post;
// if (jsDiv) jsDiv.textContent = post;
// document.body.replaceChildren(jsInput, jsDiv as HTMLDivElement);
// jsInput.addEventListener('input', inputHandler as EventListener);
// jsInput.focus();
