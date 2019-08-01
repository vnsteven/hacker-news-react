import React from 'react';

import styles from './Logo.module.css';
import Logo from '../../assets/images/logo.png';

const logo = (props) => (
  <div className={styles.Logo} onClick={props.clicked}>
    <img src={Logo} alt="logo" />
    <div className={styles.Title}>
      <p className={styles.Search}>Search</p>
      <p className={styles.Hacker}>Hacker News</p>
    </div>
  </div>
);

export default logo;
