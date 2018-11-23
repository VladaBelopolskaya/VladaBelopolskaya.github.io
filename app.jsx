const URL_SEND = "https://us-central1-mercdev-academy.cloudfunctions.net/login";
const SERVER_ERROR = 500;
const REQUEST_ERROR = 400;

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "user@example.com",
      password: "mercdev",
      isFormDisabled: false,
      isLoginError: false
    };

    this.uploadData = this.uploadData.bind(this);
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

  uploadData(evt) {
    evt.preventDefault();
    this.setState({
      isLoginError: false
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
          isFormDisabled: false,
          isLoginError: true,
          email: "",
          password: ""
        });
      } else {
        this.props.logIn(xhr.response.name, xhr.response.photoUrl);
        this.setState({
          isLoginError: false
        });
      }
    };
    xhr.onerror = () => {
      this.setState({
        isFormDisabled: false
      });
      alert("Произошла ошибка соединения");
    };

    if (xhr.status === REQUEST_ERROR) {
      this.setState({
        isFormDisabled: false
      });
      alert("Неверный запрос");
    }

    if (xhr.status === SERVER_ERROR) {
      this.setState({
        isFormDisabled: false
      });
      alert("Внутренняя ошибка сервера");
    }
  }

  render() {
    return (
      <div>
        <h2 className="block__text block__text--title">Log In</h2>
        <form
          className="block__form"
          id="form"
          method="post"
          onSubmit={this.uploadData}
        >
          <input
            className="block__input"
            name="email"
            id="email"
            type="email"
            placeholder="E-Mail"
            onChange={this.handleChangeEmail}
            value={this.state.email}
          />
          <input
            className="block__input"
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            onChange={this.handleChangePassword}
            value={this.state.password}
          />
          {this.state.errorLogin && (
            <p className="block__error">E-Mail or password is incorrect</p>
          )}
          <button className="block__button" id="login" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

function User(props) {
  return (
    <div>
      <img
        className="block__avatar"
        id="img"
        alt="avatar"
        src={props.photo}
      />
      <p className="block__text block__text--name" id="user">
        {props.userName}
      </p>
      <form
        className="block__form-logout"
        id="form-logout"
        onSubmit={props.logOut}
      >
        <button
          className="block__button block__button--logout"
          id="logout"
          type="submit"
        >
          Logout
        </button>
      </form>
    </div>
  );
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
    return (
      <div>
        <img className="logo" alt="logo" src="img/logo.svg" />
        <section className="block">
          {!this.state.user.photo && !this.state.user.userName && (
            <LoginForm logIn={this.setUser} />
          )}
          {this.state.user.photo && this.state.user.userName && (
            <User
              logOut={this.removeUser}
              photo={this.state.user.photo}
              userName={this.state.user.userName}
            />
          )}
        </section>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
