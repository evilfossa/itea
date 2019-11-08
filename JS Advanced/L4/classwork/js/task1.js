/*
      Задание:
        Сделать валидацию формы:
        1. Логин / Пароль не может быть пустым
        2. Пароли должны совпадть
        3. Пока не стоит что юзер согласен с лиц. соглашением - кнопка отправки не активна
 
        + бонус - то поле, которое не прошло валидацию подсвечивать красным.
                - которое прошло - подсвечивать зеленым.
    */

const submit = document.getElementById('submit');

window.addEventListener('load', function () {
    let myForm = document.getElementById('MyValidateForm');
    console.log(myForm);

    let submit = document.getElementById('submit');
    submit.addEventListener('click', function () {
        console.log(myForm.elements.login.value);
    })

    let checkbox = document.getElementById('agree')

    // 
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            // console.log('checked')
            submit.removeAttribute('disabled')
        }
        else {
            // console.log('Not checked')
            submit.toggleAttribute('disabled')
        }
    })

})