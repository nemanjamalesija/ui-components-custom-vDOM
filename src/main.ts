import './style.css';

function generateData() {
  let post: string = '';

  function inputHandler(e: InputEvent) {
    if (!e.target) return;

    post = (e.target as HTMLInputElement).value;
  }

  return { post, inputHandler };
}

const { post, inputHandler } = generateData();

// query selectors
const input = document.querySelector('.input') as HTMLInputElement;
const div = document.querySelector('.div');

// event listeners
input!.addEventListener('input', inputHandler as EventListener);
input!.addEventListener('click', () => {
  input.value = '';
});

function updateDOM() {
  if (!post) input.value = "What's on your mind ?";
  else {
    input!.value = post;
    div!.textContent = post;
  }
}

setTimeout(updateDOM, 15);
