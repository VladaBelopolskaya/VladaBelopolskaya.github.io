import React from "react";
import styles from "./style.css";

function Button(props) {
  return (
    <button
      className={`${styles.block__button} ${
        props.logout ? styles["block__button--logout"] : ""
      }`}
      id={props.id}
      type="submit"
    >
      {props.children}
    </button>
  );
}

export default Button;
