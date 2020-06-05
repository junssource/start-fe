//start...

const $inputForm = document.querySelector('#input-form');
const $input = document.querySelector('#input');
const $result = document.querySelector('#result');

console.log($inputForm);

const todoModel = {
  id: '',
  text: '',
  isDone: false,
};

const todos = [
  {
    text: 'JS',
    idDone: false,
  },
];

$inputForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = $input.value;
  console.log(text);
  $input.value = '';
});

const html = todos.map((todo, index) => {
  return `<ul>
    <li>
      <button class="delete">×</button>
      <input type="checkbox" class="toggle-checked">
      <span class="text">JS공부하기</span>
    </li>`;
});

$result.innerHTML = `<ul>${html.join('')}</ul>`;
