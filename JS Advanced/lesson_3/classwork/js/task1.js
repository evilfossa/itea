/*
      Задание:

        Написать скрипт, который будет добавлять введеный в инпут Receiver текст в список list.
        
        Если в списке больше 5 записей, убирать Event с кнопки AddToList.

        Кнопке AddToList добавить disabled = true

        После каждого ввода очищать значение инпута

        Используемые методы:

        addEventListener
        removeEventListener

        document.getElementById
        document.createElement

        element.innerText
        element.setAttribute
        element.appendChild

        Получить значение инпута: Receiver.value [Receiver - это id]

    */

var listCount = 0;
var receiver = document.getElementById('Receiver');
var addToList = document.getElementById('AddToList');
var list = document.getElementById('list');

addToList.addEventListener('click', addText);

function addText() {
    console.log('Click')
    let newLi = document.createElement('li');
    list.appendChild(newLi);
    newLi.innerText = receiver.value;
    receiver.value = '';
    listCount++;
    if (listCount == 5) {
        addToList.removeEventListener('click', addText);
        addToList.setAttribute('disabled', '')
    }
}