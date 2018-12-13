import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './components/wrapper.jsx';
import LoginForm from './components/login-form.jsx';
import User from './components/user.jsx';
import '../assets/css/normalize.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: "Gotham";
  font-display: swap;
  src: url("../assets/fonts/Gotham-Bold.woff") format("woff");
  font-weight: 700;
  font-style: normal;
}

  @font-face {
    font-family: "Gotham";
    font-display: swap;
    src: url("../assets/fonts/Gotham-Medium.woff") format("woff");
    font-weight: 500;
    font-style: normal;
  }

  body {
    font-family: "Gotham", "Arial", sans-serif;
    color: #262626;
    background: url("../assets/img/background.png") center;
    background-size: cover;
    min-height: 568px;
  }

  @media (min-width: 660px) {
  body {
    min-height: 1080px;
  }
`

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
    console.log(this.state, '567');
    return (
      <React.Fragment>
        <Wrapper>
          {!this.state.user.photo && !this.state.user.userName && (
            <LoginForm setUser={this.setUser} />
          )}
          {this.state.user.photo && this.state.user.userName && (
            <User
              logOut={this.removeUser}
              photo={this.state.user.photo}
              userName={this.state.user.userName}
            />
          )}
        </Wrapper>
        <GlobalStyle />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
