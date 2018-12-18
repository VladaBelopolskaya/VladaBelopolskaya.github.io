import React from "react";
import Button from "../../components/button/button.jsx";
import styles from "./style.css";
import AppContext from "../../appProvider.jsx";

class UserScreen extends React.Component {
  render() {
    return (
      <div>
        <AppContext.Consumer>
          {context => (
            <React.Fragment>
              <img
                className={styles.block__avatar}
                id="img"
                alt="avatar"
                src={context.state.user.photo}
              />
              <p
                className={`${styles.block__text} ${
                  styles["block__text--name"]
                }`}
                id="user"
              >
                {context.state.user.userName}
              </p>
              <form
                className={styles["block__form-logout"]}
                id="form-logout"
                onSubmit={context.state.setUser}
              >
                <Button logout id="login">
                  Logout
                </Button>
              </form>
            </React.Fragment>
          )}
        </AppContext.Consumer>
      </div>
    );
  }
}

export default UserScreen;
