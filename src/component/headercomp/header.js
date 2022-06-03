import React from "react";
import styles from "./header.module.css";
import logo from "../../assets/Sql_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <div className={styles.logoimg}>
          <img src={logo} />
        <FontAwesomeIcon icon={faMoon} className={styles.darkmode}/>

        </div>

        <h1>SQL EDITOR</h1>
        
      </div>
    </div>
  );
};

export default Header;
