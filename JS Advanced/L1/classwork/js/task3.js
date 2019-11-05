/*
        Задание:
        Сложить в элементе с id App следующую разметку HTML:
  
        <header>
          <a href="http://google.com.ua">
            <img src="https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png">
          </a>
          <div class="menu">
            <a href="#1"> link 1</a>
            <a href="#1"> link 2</a>
            <a href="#1"> link 3</a>
          </div>
        </header>
  
        Используя следующие методы для работы:
        getElementById
        createElement
        element.innerText
        element.className
        element.setAttribute
        element.appendChild
  
    */
var getId = document.getElementById("app");
var header = document.createElement('header');


var div = document.createElement('div');
div.className = "menu"