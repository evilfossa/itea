/*
      Задание:
        1. Выбрать как элемент блок с id - test;
        2. Выбрать по css селектору все button
        3. Выбрать родительский элемент .wrap используя точку отсчета блок с с id = createArea.
        4. Выбрать все элементы li по тегу
        5. Выбрать все элементы по классу 'test'
    */

const getById = document.getElementById('test');
console.log(getById.closest('.list'));

const getByCSS = document.querySelectorAll('button');
console.log(getById, getByCSS);

const getAllLi = document.getElementsByTagName('li');
console.log(getAllLi);

const getAllTest = document.getElementById('test');
console.log(getAllTest);

const test = document.getElementById('createArea');
console.log(test.closest('.wrap'));
