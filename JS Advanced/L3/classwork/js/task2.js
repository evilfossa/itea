/*
      Задание:

      По нажатию на кнопку, в блок с id chooseYourBlock выводить иконку с нажатой кнопки:

      House:  https://image.flaticon.com/icons/svg/149/149064.svg
      Tree: https://image.flaticon.com/icons/svg/620/620705.svg
      Plane: https://image.flaticon.com/icons/svg/579/579268.svg

      Под иконкой расположить еще одну кнопку, по нажатию на которую из соответствующего массива
      подтягивается случайная картинка с изображением в блок result.
      Предыдущий результат очищается.

      var houseArray = [
      "https://static.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      "https://i.pinimg.com/736x/7f/be/50/7fbe50ec634c65709d7fe6ac267c4e6f--large-garage-plans-house-plans-large-family.jpg",
      "https://i.ytimg.com/vi/Xx6t0gmQ_Tw/maxresdefault.jpg"
    ];
      var planeArray = [
      "http://www.x-plane.com/wp-content/uploads/2014/08/B777-200ER.png",
      "https://media.cntraveler.com/photos/57067c1e9adc6caf5afe3f4c/master/pass/plane-landing-cr-getty-sb10062851ai-001.jpg",
      "https://media.wired.com/photos/59323264a31264584499367f/master/w_1024,c_limit/diesel-plane-inline.jpg"
    ];
    var treeArray = [
      "https://static.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg",
      "https://c1.staticflickr.com/8/7218/7184786016_1ddab461e8_b.jpg",
      "http://www.atzmut.com/wp-content/uploads/2016/01/tree.jpg"
    ];

    */

var buttons = document.querySelectorAll('button');
var iconBlock = document.getElementById('chooseYourBlock');

let div = document.getElementById('chooseYourBlock');
let house = document.getElementById('HouseButton');
let tree = document.getElementById('TreeButton');
let plane = document.getElementById('PlaneButton');

console.log(buttons);

house.addEventListener('click', function () {
    let image = new Image(100, 100);
    image.src = 'https://image.flaticon.com/icons/svg/149/149064.svg';
    console.log(image);
    div.appendChild(image);
    div.appendChild(document.createElement('button'));
});

tree.addEventListener('click', function () {
    let image = new Image(100, 100);
    image.src = 'https://image.flaticon.com/icons/svg/620/620705.svg';
    console.log(image);
    div.appendChild(image);
});

plane.addEventListener('click', function () {
    let image = new Image(100, 100);
    image.src = 'https://image.flaticon.com/icons/svg/579/579268.svg';
    console.log(image);
    div.appendChild(image);
});

   // var resultBlock = document.getElementById('result');

   // console.log(buttons);

   // var iconsObj = {
   //   house:  'https://image.flaticon.com/icons/svg/149/149064.svg',
   //   tree: 'https://image.flaticon.com/icons/svg/620/620705.svg',
   //   plane: 'https://image.flaticon.com/icons/svg/579/579268.svg'
   // }

   // function showIcon(e){
   //   var val = e.target.innerText.toLowerCase();
   //   console.log(e);

   // }

   // buttons.forEach((btn) => {
   //   alert('working')
   // })