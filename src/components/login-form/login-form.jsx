import Button from '../button/button.jsx';
import Input from '../input/input.jsx';
import styles from './style.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";


const URL_SEND = "https://us-central1-mercdev-academy.cloudfunctions.net/login";
const SUCCESS_STATUS = 200;

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
    this.request(URL_SEND, this.state.email, this.state.password)
      .then(response => {
        this.props.setUser(response.name, response.photoUrl);
      })
      .catch(text => {
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
    console.log(this.props.user)
    if (this.props.user.userName !== null) return (
      <Redirect to='/user' />
    );
    return (
      <div>
        <h2 className={`${styles.block__text} ${styles['block__text--title']}`}>Log In</h2>
        <form
          className={styles.block__form}
          id="form"
          method="post"
          onSubmit={this.login}
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
          {this.state.isLoginError && (
            <p className={styles.block__error}>E-Mail or password is incorrect</p>
          )}
          <Button id="login">
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
