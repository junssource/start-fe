$btn = document.getElementById('btn');
$min = document.getElementById('min');
$max = document.getElementById('max');
$box = document.getElementById('box');
$btn.addEventListener('click', clickBtn);

var counter = 0;
var clockid;

function clickBtn() {
  var min = $min.value;
  var max = $max.value;
  counter = $min.value;

  var randomNumber;
  randomNumber = getRandomNumber(min, max);
  changeBox(randomNumber);
  min = 0;
  max = 0;
  randomNumber = 0;
  counter = 0;
}

function getRandomNumber(x, y) {
  var min = Number(x);
  var max = Number(y);
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

function changeBox(randomNumber) {
  clockid = setInterval(clockStart, 1, randomNumber);
}

function clockStart(randomNumber) {
  $btn.disabled = true;
  counter = Number(counter + 1);
  $box.innerHTML = `${counter}`;
  if (counter == randomNumber) {
    clearInterval(clockid);
    $btn.disabled = false;
  }
}
