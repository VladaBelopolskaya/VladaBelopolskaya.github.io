import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import Wrapper from "../components/wrapper/wrapper.jsx";
import User from "../components/user/user.jsx";

class UserScreen extends React.Component {
  render() {
    return (
      <Wrapper>
        <User
          logOut={this.props.logOut}
          user={this.props.user}
        />
      </Wrapper>
    )
  }
}

export default UserScreen;