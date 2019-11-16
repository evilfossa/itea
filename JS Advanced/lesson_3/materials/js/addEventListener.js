  // addEventListener
  function ChangeBackColor( e ){
    var color = e.target.dataset.color;
        console.log( e.target, color );
        document.body.style.background = color;
  }
  // //
  var buttonsSelector = document.querySelectorAll('._changeColor'); // _ используется что-бы сказать девам что класс будет использован для js
  console.log( buttonsSelector );

  // var btn = document.getElementById('test_btn');
  //     btn.addEventListener('click', ChangeBackColor);

  buttonsSelector.forEach( function( item ){
    item.addEventListener('click', ChangeBackColor);
  });

  var nButton = document.querySelector('._changeColor');
      nButton.removeEventListener('click', ChangeBackColor); // removeEventListener стоит использовать после отправки формы на сервер вместо класса disabled

  /*
    Добавление несколько обработчиков на один элемент
  */

  function mFunc1(){ console.log('Log1');}
  function mFunc2(){ console.log('Log2');}
  function mFunc3(){ console.log('Log3');}

  MultiEvent.addEventListener('click', mFunc1);
  MultiEvent.addEventListener('click', mFunc3);
  MultiEvent.addEventListener('click', mFunc2);

  // - - - -
  // В консоли для получения обработчиков (Работает только в хроме)
  // getEventListeners( MultiEvent );

  /*

    Итог:
      Есть 3 способа назнчить обработчик событий:

      Атрибут HTML: onclick="...".
      Свойство: elem.onclick = function.
      Специальный методы: elem.addEventListener

  */




