/*
      Задание:
        Сделать шиблонизатор элемента по:
        Ширине input type=range
        Цвету  input type=color
        Высоте input type=number
        Скругление углов input type=number
        Margin input type=number

      Свойсвта: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference

        + Сделать выборку цвета из рандомных 20 цветов которые выбираются из появившегося блока :
        https://s3.envato.com/files/230412754/screenshots/1.png
        За заготовку для рандома цвета использовать функцию из первых занятий.

    */

window.addEventListener("load", function () {
    var myWidth = document.getElementById('myWidth');

    myWidth.addEventListener('input', function (event) {
        console.log(event.target.value);
        result.style.width = event.target.value + 'px';
    });
});