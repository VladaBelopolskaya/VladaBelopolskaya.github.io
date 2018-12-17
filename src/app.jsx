import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from "./screens/loginScreen/loginScreen.jsx";
import UserScreen from "./screens/userScreen/userScreen.jsx";
import Wrapper from "./components/wrapper/wrapper.jsx";
import "./normalize.css";
import "./style.css";

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
        <Router>
          <Switch>
            {!this.state.user.photo && !this.state.user.userName && (
              <Route component={() => <LoginScreen setUser={this.setUser} />} />
            )}
            {this.state.user.photo && this.state.user.userName && (
              <Route
                component={() => (
                  <UserScreen logOut={this.removeUser} user={this.state.user} />
                )}
              />
            )}
          </Switch>
        </Router>
      </Wrapper>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
