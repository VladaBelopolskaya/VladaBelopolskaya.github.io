import Button from '../button/button.jsx';
import styles from './style.css'

function User(props) {
  return (
    <div>
      <img className={styles.block__avatar} id="img" alt="avatar" src={props.photo} />
      <p className={`${styles.block__text} ${styles['block__text--name']}`} id="user">
        {props.userName}
      </p>
      <form
        className={styles['block__form-logout']}
        id="form-logout"
        onSubmit={props.logOut}
      >
        <Button logout id="login">
          Logout
        </Button>
      </form>
    </div>
  );
}

export default User;