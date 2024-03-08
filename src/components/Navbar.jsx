import React from "react";
import styles from "../styles/nav.module.css";
import { useValue } from "../contex";

function Navbar() {

  const {item, total, clear} = useValue();
  // console.log(value)
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div className={styles.buttonsWrapper}>
      <button className={styles.button} onClick={clear}>Reset</button>
      </div>
      
    </div>
  );
}

export default Navbar;
