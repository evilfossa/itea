function first() {
    let div = document.getElementById('popup');
    div.classList.add("show");

}



function close() {
    let div = document.getElementById('popup');
    div.classList.toggle("show");
}
  /*

  Задача: Сделать корректно работающее всплывающее окно.
  Условие: Узменять HTML разметку выше - нельзя.
  При нажании на одну из кнопок, должно открытся окно с соответствующим data- аттрибутом.
  При нажатии на кнопку close окно дожно закрываться.

*/