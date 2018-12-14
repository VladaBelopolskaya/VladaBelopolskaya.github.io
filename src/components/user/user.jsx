import Button from '../button/button.jsx';
import styles from './style.css'
import { Redirect } from "react-router-dom";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirect: false
    }

    this.logout = this.logout.bind(this);
  };

  logout() {
    console.log(1);
    // this.props.logOut();
    console.log(2);

    this.setState(
      { isRedirect: true }
    );
    console.log(3);

  }

  render() {
    console.log(4);

    if (this.state.isRedirect) return (
      <Redirect to='/login' />
    );
    return (
      <div>
        <img className={styles.block__avatar} id="img" alt="avatar" src={this.props.user.photo} />
        <p className={`${styles.block__text} ${styles['block__text--name']}`} id="user">
          {this.props.user.userName}
        </p>
        <form
          className={styles['block__form-logout']}
          id="form-logout"
          method="post"
          onSubmit={this.logout}
        >
          <Button logout id="login">
            Logout
        </Button>
        </form>
      </div>
    );
  }
}

export default User;
