import React from 'react';
import Button from './button.jsx';
import Input from './input.jsx';
import styled from 'styled-components';

const URL_SEND = "https://us-central1-mercdev-academy.cloudfunctions.net/login";
const SUCCESS_STATUS = 200;

const H2 = styled.h2`
  margin: 0;
  padding: 0;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  margin-bottom: 32px;

  @media (min-width: 660px) {
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 48px;
  }
`;

const Form = styled.form`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

const P = styled.p`
margin: 0 0 24px 0;
  padding: 16px 0 12px 16px;
  font-size: 12px;
  line-height: 12px;
  color: #ed4159;
  font-weight: 500;
  background-color: rgba(237, 65, 89, 0.25);
  border-radius: 4px;

  @media (min-width: 660px) {
    padding: 14px 0 13px 16px;
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 30px;
  }
`;

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
    return (
      <div>
        <H2>Log In</H2>
        <Form
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
            <P>E-Mail or password is incorrect</P>
          )}
          <Button id="login">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default LoginForm;
