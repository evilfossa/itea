/*
      Задание:
        Сделать валидацию формы:
        1. Логин / Пароль не может быть пустым
        2. Пароли должны совпадть
        3. Пока не стоит что юзер согласен с лиц. соглашением - кнопка отправки не активна

        + бонус - то поле, которое не прошло валидацию подсвечивать красным.
                - которое прошло - подсвечивать зеленым.
    */

document.addEventListener('DOMContentLoaded', () => {
  const myForm = document.forms.MyValidateForm;
  const checkbox = document.getElementById('agree');
  const submit = document.getElementById('submit');
  // ADD & REMOVE CLASS FUNCTION
  function changeStatus(el, status) {
    if (status) {
      el.classList.add('OK');
      el.classList.remove('error');
    } else {
      el.classList.add('error');
      el.classList.remove('OK');
    }
  }
  // VALIDATING FUNCTION
  function eventFunction(event) {
    event.preventDefault();
    const myElements = myForm.elements;
    const arrayElements = Array.from(myElements);
    let error = false;
    arrayElements.forEach((i) => {
      if (i.type !== 'checkbox' && i.type !== 'submit') {
        if (i.value !== '') {
          changeStatus(i, true);
        } else {
          changeStatus(i, false);
          error = true;
        }
      }     
    });
    // PASSWORDS EQUAL CHECK
    if (!error) {
      if (myElements.pas1.value !== myElements.pas2.value) {
        changeStatus(myElements.pas1, false);
        changeStatus(myElements.pas2, false);
      } else {
        changeStatus(myElements.pas1, true);
        changeStatus(myElements.pas2, true);
      }
    }
  }
  // ADD EVENT LISTENER FOR 'SUBMIT' BUTTON
  myForm.addEventListener('submit', eventFunction);
  // ENABLE & DISABLE SUBMIT BUTTON
  checkbox.addEventListener('change', (e) => {
    if (e.target.checked) {
      submit.removeAttribute('disabled');
    } else {
      submit.setAttribute('disabled', true);
    }
  });
});

