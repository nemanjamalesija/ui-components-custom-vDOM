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
  const divInfo = ['div', `First post: ${post}`];
  const divInfo2 = ['h3', 'Great job!'];
  const paragraph = [
    'p',
    'This is a composed paragraph made for exercise purpose in VIRTUAL DOM and user interface components.',
  ];

  return [inputInfo, divInfo, divInfo2, paragraph];
}

function updateDOM() {
  const vDOM = createVDOM();
  const actualDOM = vDOM.map(convert);

  document.body.replaceChildren(...(actualDOM as Node[]));

  const jsInputDOM = actualDOM.find(
    (element) => element instanceof HTMLInputElement
  ) as HTMLInputElement;
  if (jsInputDOM) {
    jsInputDOM.focus();
  }
}

function convert(vDOM: any[]) {
  let convertedInput: HTMLInputElement;
  let convertedElem: Element;

  if (vDOM[0] === 'input') {
    convertedInput = document.createElement(vDOM[0]);
    convertedInput.value = vDOM[1];
    convertedInput.addEventListener('input', vDOM[2] as EventListener);
    convertedInput.focus();
    return convertedInput;
  }

  if (vDOM[0] === 'div' || vDOM[0] === 'h3' || vDOM[0] === 'p') {
    convertedElem = document.createElement(vDOM[0]);
    convertedElem.textContent = vDOM[1];
    return convertedElem;
  } else return new Error('Item not convertible or incorrectly passed item');
}

setInterval(updateDOM, 150);
