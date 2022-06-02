import React from "react";
import styles from "./input.module.css";
const input = () => {
  return (
    <div className={styles.inputmain}>
      <p>
        <b>INPUT</b>    
      </p>
      <div >
        <input type="text"
        className={styles.inputfield}
         />
      </div>
    </div>
  );
};

export default input;
