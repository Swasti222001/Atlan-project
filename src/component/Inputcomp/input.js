import { useState, useEffect } from 'react'
import styles from "./input.module.css";
const Input = ({ inputFieldData }) => {

  return (
    <div className={styles.inputmain}>
      <p>
        <b>INPUT</b>
      </p>
      <div className={styles.inputCont}>
        <textarea
          value={inputFieldData}
          className={styles.inputfield}
        />

      </div>
    </div>
  );
};

export default Input;
