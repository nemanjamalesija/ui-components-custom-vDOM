import './style.css';

const data: {
  [key: string]: string;
} = {
  post: '',
};

function updateData(label: string, value: string) {
  data[label] = value;
  updateDOM();
}

function generateData() {
  let vDOM = createVDOM();
  let prevDom: any[] = [];
  let elems: any[] = [];

  return { vDOM, prevDom, elems };
}

let { vDOM, prevDom, elems } = generateData();

function inputHandler(e: InputEvent) {
  if (!e.target) return;

  const inputElement = e.target as HTMLInputElement;
  updateData('post', inputElement.value);
}

function createVDOM() {
  const vDOMElems = [
    ['input', data.post, inputHandler],
    ['div', `First post: ${data.post}`],
    ['h3', 'Great job!'],
    [
      'p',
      'This is a composed paragraph made for exercise purpose in VIRTUAL DOM and user interface components.',
    ],
  ];

  return vDOMElems;
}

function updateDOM() {
  if (elems.length === 0) {
    elems = vDOM.map(convert);
    document.body.append(...(elems as Node[]));
  } else {
    prevDom = [...vDOM];
    vDOM = createVDOM();
    findDiff(prevDom, vDOM);
  }
}

function convert(vDOM: any[]) {
  const element = document.createElement(vDOM[0]);

  if (vDOM[0] === 'input') {
    element.value = vDOM[1];
    element.addEventListener('input', vDOM[2] as EventListener);
    return element as HTMLInputElement;
  }

  if (vDOM[0] === 'div' || vDOM[0] === 'h3' || vDOM[0] === 'p') {
    element.textContent = vDOM[1];
    return element as Element;
  } else return new Error('Item not convertible or incorrectly passed item');
}

function findDiff(prevVDOM: any[], currentVDOM: any[]) {
  for (let i = 0; i < currentVDOM.length; i++) {
    if (JSON.stringify(prevVDOM[i]) !== JSON.stringify(currentVDOM[i])) {
      elems[i].textContent = currentVDOM[i][1];
      elems[i].value = currentVDOM[i][1];
    }
  }
}

updateDOM();
