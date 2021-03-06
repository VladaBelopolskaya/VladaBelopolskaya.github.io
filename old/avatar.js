"use strict";

(function() {
  /**
   * Установка имени и аватрки, по данным, которые пришли с сервера
   * @param name имя юзера
   * @param url аватарка юзера
   */
  function setLoginInfo(name, url) {
    const userName = document.querySelector("#user");
    const userPhoto = document.querySelector("#img");
    userName.textContent = name;
    userPhoto.src = url;
  }

  /**
   * Очищение localStorage и переход на страницу авторизации
   */
  function logout(evt) {
    evt.preventDefault();
    document.location.href = "index.html";
    localStorage.removeItem("nameUser");
    localStorage.removeItem("imgUser");
  }

  setLoginInfo(
    localStorage.getItem("nameUser"),
    localStorage.getItem("imgUser")
  );

  const form = document.querySelector("#form-logout");
  form.addEventListener("submit", logout);
})();
