request(url, email, password) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    const json = {
      email,
      password
    };

    xhr.responseType = "json";
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(json));

    xhr.onload = () => {
      if (xhr.status === SUCCESS_STATUS) {
        resolve(xhr.response);
      } else {
        reject("Произошла ошибка. Код ответа: " + xhr.status);
      }
    };
    xhr.onerror = () => {
      let errorText = "Произошла ошибка соединения";
      reject(errorText);
    };
  });
}