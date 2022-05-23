import React from 'react'
import styles from './Footer.module.css'
import { FaBeer } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
      <FaBeer /> <span>React + TS</span> @ 2022
      </p>
    </footer>
  )
}

export default Footer