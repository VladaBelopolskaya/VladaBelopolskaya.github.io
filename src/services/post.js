const SUCCESS_STATUS = 200;

function post(url, email, password) {
  return new Promise(function(resolve, reject) {
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
        const resp = {
          text: "Произошла ошибка. Код ответа: " + xhr.status,
          type: "other"
        };
        reject(resp);
      }
    };
    xhr.onerror = () => {
      const resp = {
        text: "Произошла ошибка соединения",
        type: "connection"
      };
      reject(resp);
    };
  });
}

export default post;
