/*

  Задание 1.

  Написать скрипт который будет будет переключать вкладки по нажатию
  на кнопки в хедере.

  Главное условие - изменять файл HTML нельзя.

  Алгоритм:
    1. Выбрать каждую кнопку в шапке
       + бонус выбрать одним селектором

    2. Повесить кнопку онклик
        button1.onclick = function(event) {

        }
        + бонус: один обработчик на все три кнопки

    3. Написать функцию которая выбирает соответствующую вкладку
       и добавляет к ней класс active

    4. Написать функцию hideAllTabs которая прячет все вкладки.
       Удаляя класс active со всех вкладок

  Методы для работы:

    getElementById
    querySelector
    classList
    classList.add
    forEach
    onclick

    element.onclick = function(event) {
      // do stuff ...
    }

*/

// Первый вариант. Рабочий, но не прикольный.

// const btn = document.querySelectorAll('button.showButton')
// const div = document.querySelectorAll('div.tab')
// // console.log(btn);
// // console.log(div);

// btn[0].onclick = function (event) {
//   // console.log("Tab 1");
//   // console.log(btn[0].dataset.tab);
//   div[0].classList.toggle('active');
// }

// btn[1].onclick = function (event) {
//   // console.log("Tab 2");
//   // console.log(btn[1].dataset.tab);
//   div[1].classList.toggle('active');
// }

// btn[2].onclick = function (event) {
//   // console.log("Tab 3");
//   // console.log(btn[2].dataset.tab);
//   div[2].classList.toggle('active');
// }

// btn[3].onclick = function (event) {
//   // console.log("Tab 3");
//   // console.log(btn[2].dataset.tab);
//   for (let i = 0; i < div.length; i++) {
//     div[i].classList.remove('active');
//   }
// }

// Второй вариант. Вполе себе ок, наверное.

let btn = document.querySelector('.buttonsHeader');
let tabs = document.querySelectorAll('.tab');

btn.onclick = function open(event) {
  let button = event.target;
  if (button.className === 'showButton') {
    tabs.forEach(tab => {
      if (tab.dataset.tab === button.dataset.tab) {
        tab.classList.toggle('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }
}