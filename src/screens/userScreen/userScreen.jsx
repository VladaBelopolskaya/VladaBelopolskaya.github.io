import React from "react";
import Button from "../../components/button/button.jsx";
import styles from "./style.css";

class UserScreen extends React.Component {
  render() {
    return (
      <div>
        <img
          className={styles.block__avatar}
          id="img"
          alt="avatar"
          src={this.props.user.photo}
        />
        <p
          className={`${styles.block__text} ${styles["block__text--name"]}`}
          id="user"
        >
          {this.props.user.userName}
        </p>
        <form
          className={styles["block__form-logout"]}
          id="form-logout"
          onSubmit={this.props.logOut}
        >
          <Button logout id="login">
            Logout
          </Button>
        </form>
      </div>
    );
  }
}

export default UserScreen;
