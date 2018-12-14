import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import Wrapper from "../components/wrapper/wrapper.jsx";
import LoginForm from "../components/login-form/login-form.jsx";

class LoginScreen extends React.Component {
  render() {
    return (
      <Wrapper>
        <LoginForm setUser={this.props.setUser} user={this.props.user}></LoginForm>
      </Wrapper>
    )
  }
}

export default LoginScreen;