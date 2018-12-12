function Wrapper(props) {
  return React.createElement("div", null, React.createElement("img", {
    className: "logo",
    alt: "logo",
    src: "img/logo.svg"
  }), React.createElement("section", {
    className: "block"
  }, props.children));
}