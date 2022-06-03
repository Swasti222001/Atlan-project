import React from 'react'
import styles from './header.module.css'
import logo from '../../assets/Sql_logo.png'
const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <div className={styles.logoimg}><img src={logo} /></div>

        <h1>SQL EDITOR</h1></div>
    </div>
  )
}

export default Header
