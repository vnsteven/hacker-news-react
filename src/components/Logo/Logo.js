import React from 'react';

import styles from './Logo.module.css';
import Logo from '../../assets/images/logo.png';

const logo = (props) => (
  <div className={styles.Logo}>
    <img src={Logo} alt="logo" />
    <div className={styles.Title}>
      Search <br />
      Hacker News
    </div>
  </div>
);

export default logo;
