/*
      1. Выбрать блок Target
      2. Cоздать див внутри этого блока
      3. Добавить ему 3 класса "Ctrl Shift Delete" используя свойство className
      4. Добавиь класс через метод add
      5. Удалить класс "Delete"
      6. Применить метод toggle на класс "Command"
    */

const getById = document.getElementById('target');

function createDiv() {
  const div = document.createElement('div');
  div.className = 'Ctrl Shift Delete';
  div.classList.add('addClass');
  div.classList.remove('Shift');
  div.classList.toggle('Ctrl');
  getById.appendChild(div);
}

createDiv();
