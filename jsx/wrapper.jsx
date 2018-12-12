function Wrapper(props) {
  return (
    <div>
      <img className="logo" alt="logo" src="img/logo.svg" />
      <section className="block">{props.children}</section>
    </div>
  );
}
