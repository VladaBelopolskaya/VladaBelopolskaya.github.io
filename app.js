const URL_SEND = "https://us-central1-mercdev-academy.cloudfunctions.net/login";
const SERVER_ERROR = 500;
const REQUEST_ERROR = 400;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "user@example.com",
      password: "mercdev",
      disabledForm: false,
      errorLogin: false,
      succesLogin: false,
      userName: null,
      photo: null
    };
    this.uploadData = this.uploadData.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  handleChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  logOut() {
    this.setState({
      succesLogin: false
    });
  }

  uploadData(evt) {
    evt.preventDefault();
    this.setState({
      errorLogin: false
    });
    const xhr = new XMLHttpRequest();
    const json = {
      email: this.state.email,
      password: this.state.password
    };
    xhr.responseType = "json";
    xhr.open("POST", URL_SEND);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(json));

    xhr.onload = () => {
      if (xhr.response.error) {
        this.setState({
          disabledForm: false,
          errorLogin: true,
          email: "",
          password: ""
        });
      } else {
        this.setState({
          succesLogin: true,
          errorLogin: false,
          userName: xhr.response.name,
          photo: xhr.response.photoUrl
        });
      }
    };

    xhr.onerror = () => {
      this.setState({
        disabledForm: false
      });
      alert("Произошла ошибка соединения");
    };

    if (xhr.status === REQUEST_ERROR) {
      this.setState({
        disabledForm: false
      });
      alert("Неверный запрос");
    }

    if (xhr.status === SERVER_ERROR) {
      this.setState({
        disabledForm: false
      });
      alert("Внутренняя ошибка сервера");
    }
  }

  render() {
    return React.createElement("div", null, React.createElement("img", {
      className: "logo",
      alt: "logo",
      src: "img/logo.svg"
    }), React.createElement("section", {
      className: "block"
    }, !this.state.succesLogin && React.createElement("div", null, React.createElement("h2", {
      className: "block__text block__text--title"
    }, "Log In"), React.createElement("form", {
      className: "block__form",
      id: "form",
      method: "post",
      onSubmit: this.uploadData
    }, React.createElement("input", {
      className: this.state.errorLogin ? "block__input block__input--error" : "block__input",
      name: "email",
      id: "email",
      type: "email",
      placeholder: "E-Mail",
      onChange: this.handleChangeEmail,
      value: this.state.email
    }), React.createElement("input", {
      className: "block__input",
      name: "password",
      id: "password",
      type: "password",
      placeholder: "Password",
      onChange: this.handleChangePassword,
      value: this.state.password
    }), this.state.errorLogin && React.createElement("p", {
      className: "block__error"
    }, "E-Mail or password is incorrect"), React.createElement("button", {
      className: "block__button",
      id: "login",
      type: "submit"
    }, "Login"))), this.state.succesLogin && React.createElement("div", null, React.createElement("img", {
      className: "block__avatar",
      id: "img",
      alt: "avatar",
      src: this.state.photo
    }), React.createElement("p", {
      className: "block__text block__text--name",
      id: "user"
    }, this.state.userName), React.createElement("form", {
      className: "block__form-logout",
      id: "form-logout",
      onSubmit: this.logOut
    }, React.createElement("button", {
      className: "block__button block__button--logout",
      id: "logout",
      type: "submit"
    }, "Logout")))));
  }

}

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));