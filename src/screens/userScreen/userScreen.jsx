import React from "react";
import Button from "../../components/button/button.jsx";
import styles from "./style.css";
import AppContext from "../../appContext.jsx";

class UserScreen extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <div>
            <img
              className={styles.block__avatar}
              alt="avatar"
              src={context.state.user.photo}
            />
            <p
              className={`${styles.block__text} ${styles["block__text--name"]}`}
            >
              {context.state.user.userName}
            </p>
            <form
              className={styles["block__form-logout"]}
              onSubmit={context.removeUser}
            >
              <Button className="block__button--logout" type="submit">
                Logout
              </Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default UserScreen;
