/* eslint-disable no-console */
/* eslint-disable max-len */
/*

  Задание написать простой слайдер.

    Есть массив с картинками из которых должен состоять наш слайдер.
    По умолчанию выводим первый элмемнт нашего слайдера в блок с id='slider'
    ( window.onload = func(){...} // window.addEventListener('load', function(){...}) )
    По клику на PrevSlide/NextSlide показываем предыдущий или следующий сладй соответствено.

    Для этого необходимо написать 4 функции которые будут:

    1. Срабатывать на событие load обьекта window и загружать наш слайд по умолчанию.
    2. RenderImage -> Очищать текущий контент блока #slider. Создавать нашу картинку и через метод аппенд чайлд вставлять её в слайдер.
    3. NextSlide -> По клику на NextSilde передавать currentPosition текущего слайда + 1 в функцию рендера
    4. PrevSlide -> Тоже самое что предыдущий вариант, но на кнопку PrevSlide и передавать currentPosition - 1
      + бонус сделать так что бы при достижении последнего и первого слада вас после кидало на первый и последний слайд соответственно.
      + бонсу анимация появления слайдов через навешивание дополнительных стилей

*/

const images = ['images/cat1.jpg',
  'images/cat2.jpg',
  'images/cat3.jpg',
  'images/cat4.jpg',
  'images/cat5.jpg',
  'images/cat6.jpg',
  'images/cat7.jpg',
  'images/cat8.jpg',
];
let num = 0;
const prev = document.getElementById('PrevSilde');
const next = document.getElementById('NextSilde');
const slider = document.getElementById('slider');
const element = document.querySelector('#slider');

console.log(element);

window.addEventListener('DOMContentLoaded', () => {
  element.classList.add('animated', 'fadeIn');
  element.addEventListener('animationend', () => {
    element.classList.remove('animated', 'fadeIn');
  });
  const img = new Image();
  img.src = images[0];
  slider.appendChild(img);
});

function image() {
  slider.innerHTML = '';
  const img = new Image();
  if (num >= images.length) {
    num = 0;
  } else if (num < 0) {
    num = images.length - 1;
  }
  img.src = images[num];
  slider.appendChild(img);
}

prev.addEventListener('click', () => {
  element.classList.add('animated', 'fadeIn');
  element.addEventListener('animationend', () => {
    element.classList.remove('animated', 'fadeIn');
  });
  console.log(element);
  num -= 1;
  image();
});

next.addEventListener('click', () => {
  element.classList.add('animated', 'fadeIn');
  element.addEventListener('animationend', () => {
    element.classList.remove('animated', 'fadeIn');
  });
  console.log(element);
  num += 1;
  image();
});
