import React from "react";
import styles from "./style.css";

function Button({ className, ...props }) {
  return (
    <button
      className={`${styles.block__button} ${styles[className]}`}
      {...props}
    />
  );
}

export default Button;
