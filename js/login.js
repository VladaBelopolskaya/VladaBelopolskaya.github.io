'use strict';

(function () {
    const URL_SEND = 'https://us-central1-mercdev-academy.cloudfunctions.net/login';

    /**
     * Отправка email и password на сервер
     */
    function upload() {

        removeError();

        const xhr = new XMLHttpRequest();
        const json = {
            email: document.querySelector('#email').value,
            password: document.querySelector('#password').value
        }

        xhr.responseType = 'json';
        xhr.open('POST', URL_SEND);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(json));

        xhr.onload = function () {
            if (xhr.response.error) {
                errorLogin();
                errorEmail();
            } else {
                document.location.href = "avatar.html"
                localStorage.setItem('nameUser', xhr.response.name);
                localStorage.setItem('imgUser', xhr.response.photoUrl);
            }
        };
        xhr.onerror = function () {
            alert('Произошла ошибка соединения');
        };
    }

    /**
     * Удаление блока с ошибкой
     */
    function removeError() {
        const error = document.querySelector('.block__error');
        if (error) {
            error.remove();
        }
    }

    /**
     * Отображения блока с ошибкой
     */
    function errorLogin() {
        const form = document.querySelector('#form');
        const textError = document.createElement('p');
        const password = document.querySelector('#password');
        password.value = password.defaultValue;
        textError.textContent = 'E-Mail or password is incorrect';
        textError.classList.add('block__error');
        form.insertBefore(textError, form.lastElementChild);
    }

    /**
     * Выделение красным поля с почтой, если там есть данные
     */
    function errorEmail() {
        const emailInput = document.querySelector('#email')
        if (emailInput.value) {
            emailInput.classList.add('block__input--error');
        }
    }

    /**
     * Удаление класса, выделяющего почту и border красным
     */
    function removeClass() {
        const emailInput = document.querySelector('#email');
        emailInput.classList.remove('block__input--error');
    }

    const buttonSubmit = document.querySelector('#login');
    buttonSubmit.addEventListener('mouseup', upload);
    const inputEmail = document.querySelector('#email');
    inputEmail.addEventListener('focus', removeClass);
})();
