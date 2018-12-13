import styles from '../../assets/css/style.css'

function Wrapper(props) {
  console.log(styles);
  console.log('123');

  return (
    <div>
      <img className={styles.logo} alt="logo" src="assets/img/logo.svg" />
      <section className={styles.block}>{props.children}</section>
    </div>
  );
}

export default Wrapper;
