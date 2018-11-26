const URL_SEND = "https://us-central1-mercdev-academy.cloudfunctions.net/login";
const SUCCESS_STATUS = 200;

function Button(props) {
  return React.createElement("button", {
    className: props.className,
    id: props.id,
    type: "submit"
  }, props.children);
}

function Input(props) {
  return React.createElement("div", null, React.createElement("input", {
    className: "block__input",
    name: props.name,
    id: props.id,
    type: props.type,
    placeholder: props.placeholder,
    onChange: props.onChange,
    value: props.value
  }));
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "user@example.com",
      password: "mercdev",
      isFormDisabled: false,
      isLoginError: false
    };
    this.login = this.login.bind(this);
    this.request = this.request.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeEmail(evt) {
    this.setState({
      email: evt.target.value
    });
  }

  handleChangePassword(evt) {
    this.setState({
      password: evt.target.value
    });
  }

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

  login(evt) {
    evt.preventDefault();
    this.request(URL_SEND, this.state.email, this.state.password).then(response => {
      this.props.setUser(response.name, response.photoUrl);
    }).catch(text => {
      this.setState({
        isFormDisabled: false,
        isLoginError: true,
        email: "",
        password: ""
      });
      alert(text);
    });
  }

  render() {
    return React.createElement("div", null, React.createElement("h2", {
      className: "block__text block__text--title"
    }, "Log In"), React.createElement("form", {
      className: "block__form",
      id: "form",
      method: "post",
      onSubmit: this.login
    }, React.createElement(Input, {
      name: "email",
      id: "email",
      type: "email",
      placeholder: "E-Mail",
      onChange: this.handleChangeEmail,
      value: this.state.email
    }), React.createElement(Input, {
      name: "password",
      id: "password",
      type: "password",
      placeholder: "Password",
      onChange: this.handleChangePassword,
      value: this.state.password
    }), this.state.isLoginError && React.createElement("p", {
      className: "block__error"
    }, "E-Mail or password is incorrect"), React.createElement(Button, {
      className: "block__button",
      id: "login"
    }, "Login")));
  }

}

function User(props) {
  return React.createElement("div", null, React.createElement("img", {
    className: "block__avatar",
    id: "img",
    alt: "avatar",
    src: props.photo
  }), React.createElement("p", {
    className: "block__text block__text--name",
    id: "user"
  }, props.userName), React.createElement("form", {
    className: "block__form-logout",
    id: "form-logout",
    onSubmit: props.logOut
  }, React.createElement(Button, {
    className: "block__button block__button--logout",
    id: "login"
  }, "Logout")));
}

function Wrapper(props) {
  return React.createElement("div", null, React.createElement("img", {
    className: "logo",
    alt: "logo",
    src: "img/logo.svg"
  }), React.createElement("section", {
    className: "block"
  }, props.children));
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userName: null,
        photo: null
      }
    };
    this.setUser = this.setUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }

  removeUser() {
    this.setState({
      user: {
        userName: null,
        photo: null
      }
    });
  }

  setUser(userName, photo) {
    this.setState({
      user: {
        userName: userName,
        photo: photo
      }
    });
  }

  render() {
    return React.createElement(Wrapper, null, !this.state.user.photo && !this.state.user.userName && React.createElement(LoginForm, {
      setUser: this.setUser
    }), this.state.user.photo && this.state.user.userName && React.createElement(User, {
      logOut: this.removeUser,
      photo: this.state.user.photo,
      userName: this.state.user.userName
    }));
  }

}

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
