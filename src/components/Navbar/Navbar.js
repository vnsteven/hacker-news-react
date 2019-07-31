import React from 'react';

import Logo from '../Logo/Logo';
import Searchbar from '../Searchbar/Searchbar';

import styles from './Navbar.module.css';

const navbar = () => (
  <header className={styles.Navbar}>
    <div>
      <Logo />
    </div>
    <div className={styles.Searchbar}>
      <Searchbar />
    </div>
    <div></div>
  </header>
);

export default navbar;
