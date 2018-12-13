import Wrapper from './wrapper.jsx';
import LoginForm from './login-form.jsx';
import User from './user.jsx';

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
    return (
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
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
