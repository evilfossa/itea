/*
        Задание 0:

        - Вывести ОДИН лог в котором будет идентефикатор 'Combined log:' и массив Table
        - Вывести в консоль табличку из массива который находится в переменной Table
        - Вывести сообщение с ошибкой "Oops! Something gonna wrong!"
        - Вывести предупреждение "Be careful in the dark! It's can be dangerous"
        - Вывести цветной лог, где сообщение будет написано зеленым цветом и 30 размером шрифта
        - Сгрупировать несколько консоль логов, которые будут выводится друг за другом.
          | log 1
          |- Group
          |- Log 2
      */


const Table = ['Hey!', 'this', 'is', 'js', 'advanced', 'course'];

console.log('Combined log: ');
console.table([Table]);
console.error('Oops! Something gonna wrong!');
console.warn("Be careful in the dark! It's can be dangerous");
console.log('%cCSS Console log!', 'font-size:30px; color: green');

console.group('log1');
console.log('Group');
console.log('Log 2');
console.groupEnd();
