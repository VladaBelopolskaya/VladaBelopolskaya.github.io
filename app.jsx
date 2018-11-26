const URL_SEND = "https://us-central1-mercdev-academy.cloudfunctions.net/login";
const SERVER_ERROR = 500;
const REQUEST_ERROR = 400;
const SUCCESS_STATUS = 200;

function Button(props) {
  return (
    <button className={props.className} id={props.id} type="submit">
      {props.children}
    </button>
  );
}

function Input(props) {
  return (
    <div>
      <input
        className="block__input"
        name={props.name}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
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

    this.uploadData = this.uploadData.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.getHttp = this.getHttp.bind(this);
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

  getHttp(url) {
    return new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      const json = {
        email: this.state.email,
        password: this.state.password
      };

      xhr.responseType = "json";
      xhr.open("POST", url);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify(json));

      xhr.onload = () => {
        if (xhr.status === SUCCESS_STATUS) {
          resolve(this.response);
        } else {
          reject(xhr.statusText);
        }
      };
      xhr.onerror = () => {
        reject();
      };
    });
  }

  uploadData(evt) {
    evt.preventDefault();
    this.setState({
      isLoginError: false
    });

    this.getHttp(URL_SEND)
      .then(
        response => {
          this.props.logIn(response.name, response.photoUrl);
          this.setState({
            isLoginError: false
          });
        },
        statusText => {
          this.setState({
            isFormDisabled: false,
            isLoginError: true,
            email: "",
            password: ""
          });
          alert(statusText);
        }
      )
      .catch(() => {
        this.setState({
          isFormDisabled: false
        });
        alert("Произошла ошибка соединения");
      });
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
          <Input
            name="email"
            id="email"
            type="email"
            placeholder="E-Mail"
            onChange={this.handleChangeEmail}
            value={this.state.email}
          />
          <Input
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
          <Button className="block__button" id="login">
            Login
          </Button>
        </form>
      </div>
    );
  }
}

function User(props) {
  return (
    <div>
      <img className="block__avatar" id="img" alt="avatar" src={props.photo} />
      <p className="block__text block__text--name" id="user">
        {props.userName}
      </p>
      <form
        className="block__form-logout"
        id="form-logout"
        onSubmit={props.logOut}
      >
        <Button className="block__button block__button--logout" id="login">
          Logout
        </Button>
      </form>
    </div>
  );
}

function Wrapper(props) {
  return (
    <div>
      <img className="logo" alt="logo" src="img/logo.svg" />
      <section className="block">
        {props.children}
      </section>
    </div>
  )
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
      <Wrapper>
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
      </Wrapper>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
