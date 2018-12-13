import styles from '../css/style.css';

function Input(props) {
  return (
    <div>
      <input
        className={styles.block__input}
        {...props}
      />
    </div>
  );
}

export default Input;
