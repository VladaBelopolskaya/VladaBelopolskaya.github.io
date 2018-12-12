function Button(props) {
  return (
    <button className={props.className} id={props.id} type="submit">
      {props.children}
    </button>
  );
}
