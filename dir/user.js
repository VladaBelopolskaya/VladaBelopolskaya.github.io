function User(props) {
  return React.createElement("div", null, React.createElement("img", {
    className: "block__avatar",
    id: "img",
    alt: "avatar",
    src: props.photo
  }), React.createElement("p", {
    className: "block__text block__text--name",
    id: "user"
  }, props.userName), React.createElement("form", {
    className: "block__form-logout",
    id: "form-logout",
    onSubmit: props.logOut
  }, React.createElement(Button, {
    className: "block__button block__button--logout",
    id: "login"
  }, "Logout")));
}