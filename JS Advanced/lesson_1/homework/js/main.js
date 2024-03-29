/* eslint-disable no-console */
/* eslint-disable no-trailing-spaces */
/*

  Задание 1.

  Написать функцию которая будет задавать СЛУЧАЙНЫЙ цвет для фона.
  Каждая перезагрузка страницы будет с новым цветом.
  Для написания используйте функцию на получение случайного целого числа,
  между минимальным и максимальным значением (Приложена снизу задания)

  + Бонус, повесить обработчик на кнопку через метод onClick
  + Бонус, использовать 16-ричную систему исчесления и цвет HEX -> #FFCC00
  + Бонус выводить полученый цвет по центру страницы.
  
  Необходимо создать блок через createElement задать ему стили через element.style
  и вывести через appendChild или insertBefore

  Необходимые материалы:
    Math.Random (Доки): https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    __
    Работа с цветом:
    Вариант 1.
      Исользовать element.style.background = 'rgb(r,g,b)';
      где r,g,b случайное число от 0 до 255;

    Вариант 2.
      Исользовать element.style.background = '#RRGGBB';
      где, RR, GG, BB, значние цвета в 16-ричной системе исчесления
      Формирование цвета в вебе: https://ru.wikipedia.org/wiki/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0_HTML
      Перевод в 16-ричную систему исчесления делается при помощи
      метода Number.toString( 16 ) https://www.w3schools.com/jsref/jsref_tostring_number.asp,

      var myNumber = '251'
      myNumber.toString(16) // fb

*/

const color = new Array(3);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  for (let i = 0; i < color.length; i += 1) {
    color[i] = getRandomIntInclusive(0, 255);
  }
}

function textMainColor() {
  const text = document.getElementById('text');
  text.className = 'text';
  text.innerText = `R: ${color[0]} G: ${color[1]} B: ${color[2]}`;
}

function changeColor() {
  getRandomColor();
  textMainColor();
  document.body.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
}

document.body.onload = changeColor();
document.body.onload = textMainColor();

const buttons = document.querySelectorAll('button');
const div = document.createElement('div');
const span = document.createElement('span');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const area = document.getElementById('createArea');
    if (button.id === 'change') {
      changeColor();
    } else if (button.id === 'create') {
      div.innerHTML = '';
      getRandomColor();
      div.id = 'createArea';
      div.className = 'divClassName';
      span.innerText = `R: ${color[0]} G: ${color[1]} B: ${color[2]}`;
      span.className = 'text';
      div.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
      document.body.appendChild(div);
      div.appendChild(span);
    } else if (button.id === 'hide') {
      area.style.display = 'none';
    } else if (button.id === 'show') {
      area.style.display = 'block';
    } else if (button.id === 'remove') {
      area.remove();
    }
  });
});
