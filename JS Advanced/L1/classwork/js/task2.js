/*
      Задание:
        1. Выбрать как элемент блок с id - test;
        2. Выбрать по css селектору все button
        3. Выбрать родительский элемент .wrap используя точку отсчета блок с с id = createArea.
        4. Выбрать все элементы li по тегу
        5. Выбрать все элементы по классу 'test'
    */

// var getById = document.getElementById("test");
// console.log(getById.closest(".list"));

// var getByCSS = document.querySelectorAll("button");
// console.log(getById, getByCSS);

// var getAllLi = document.getElementsByTagName("li")
// console.log(getAllLi);

// var getAllTest = document.getElementById("test");
// console.log(getAllTest);

var test = document.getElementById("createArea");
console.log(test.closest(".wrap"));