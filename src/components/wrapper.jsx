import styles from '../css/style.css'

function Wrapper(props) {
  console.log(styles);
  console.log('123');

  return (
    <div>
      <img className={styles.logo} alt="logo" src="img/logo.svg" />
      <section className={styles.block}>{props.children}</section>
    </div>
  );
}

export default Wrapper;
