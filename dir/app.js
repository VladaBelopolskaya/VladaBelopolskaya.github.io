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
    console.log(this.state);
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