import React from "react";
import styles from "./style.css";

function Wrapper(props) {
  return (
    <div>
      <img className={styles.logo} alt="logo" src="assets/img/logo.svg" />
      <section className={styles.block}>{props.children}</section>
    </div>
  );
}

export default Wrapper;
