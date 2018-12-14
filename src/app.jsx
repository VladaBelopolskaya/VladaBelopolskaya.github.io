import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import LoginScreen from './screens/loginScreen.jsx';
import UserScreen from './screens/userScreen.jsx';
import Wrapper from './components/wrapper/wrapper.jsx';
import LoginForm from './components/login-form/login-form.jsx';
import User from './components/user/user.jsx';
import './normalize.css';
import './style.css';


// import { Router } from 'react-router-dom';
// import Route from 'react-router-dom/es/Route';
// import Switch from 'react-router-dom/es/Switch';
// import Redirect from 'react-router-dom/es/Redirect';


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
      <Router>
        <Switch>
          <Route exact path='/login' component={() => <LoginScreen setUser={this.setUser} user={this.state.user} />} />
          <Route exact path='/user' component={() => <UserScreen logOut={this.removeUser} user={this.state.user} />} />
          <Redirect to='/login' />
        </Switch>



        {/* <Wrapper>
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
        </Wrapper> */}
      </Router>

    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
