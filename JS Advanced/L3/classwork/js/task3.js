/*
        Задание:

        Написать скрипт, который будет приводить в действие переключалки из разметки.
        И будет перемещать класс ball по точкам в зависимости от нажатой кнопки

      */

var containers = document.querySelectorAll('.roadMap__container');
containers.forEach(function (container) {
    console.log(container);
    var ball = container.querySelector('.ball');
    console.log(ball.dataset.id);
})