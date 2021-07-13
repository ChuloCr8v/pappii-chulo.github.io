const hello = document.querySelector('.hello');
hello.addEventListener('animationend', ()=> {

  const texts = ['I am'];
  let count = 0;
  let index = 0;
  let currentText = '';
  let letter = '';

  (function type() {
    if (count === texts.length) {
      return;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.i-am').innerText = letter;

    if (letter.length === currentText.length) {
      count++
      index = 0;
    }

    setTimeout(type, 400);

  }())

})

const pappiiChulo = document.querySelector('.papi-chulo');
pappiiChulo.addEventListener('animationend', ()=> {

  const texts = ['I Write'];
  let count = 0;
  let index = 0;
  let currentText = '';
  let letter = '';

  (function type() {
    if (count === texts.length) {
      return;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.write').innerText = letter;

    if (letter.length === currentText.length) {
      count++
      index = 0;
    }

    setTimeout(type, 400);

  }())

})