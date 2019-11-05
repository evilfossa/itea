/* eslint-disable no-unused-vars */
/*
      Задание:
        Получить data-атрибут с цветом с кнопки и задать фону странички такой цвет
    */
function ChangeColor(event) {
  console.log(event.target);
  /*
      Для того что бы получить кнопку на которую вы нажали используйте
      свойство event.target в котором хранится ссылка на кнопку.
      Пример уже написан выше.
    */

  // Ваш код должен быть тут!

  document.body.style.background = event.target.dataset.color;
}
