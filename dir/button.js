function Button(props) {
  return React.createElement("button", {
    className: props.className,
    id: props.id,
    type: "submit"
  }, props.children);
}