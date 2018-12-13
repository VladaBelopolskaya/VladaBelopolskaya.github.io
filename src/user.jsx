import Button from './button.jsx';

function User(props) {
  return (
    <div>
      <img className="block__avatar" id="img" alt="avatar" src={props.photo} />
      <p className="block__text block__text--name" id="user">
        {props.userName}
      </p>
      <form
        className="block__form-logout"
        id="form-logout"
        onSubmit={props.logOut}
      >
        <Button className="block__button block__button--logout" id="login">
          Logout
        </Button>
      </form>
    </div>
  );
}

export default User;
