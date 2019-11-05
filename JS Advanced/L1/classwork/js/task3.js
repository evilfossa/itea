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
const app = document.getElementById('app');
const header = document.createElement('header');
const div = document.createElement('div');
const a = document.createElement('a');
const img = document.createElement('img');

app.appendChild(header);
header.appendChild(a);
a.href = 'https://google.com.ua';
a.appendChild(img);
img.src = 'https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
header.appendChild(div);
div.classList.add('menu');

// Не понятно как создать несколько a-шек в div'e
