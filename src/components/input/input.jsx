import React from "react";
import styles from "./style.css";

function Input(props) {
  return (
    <div>
      <input className={styles.block__input} {...props} />
    </div>
  );
}

export default Input;
