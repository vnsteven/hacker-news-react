import React from 'react';

import styles from './Searchbar.module.css';

const searchBar = () => (
  <div className={styles.Searchbar}>
    <div className={styles.Icon}>
      <i class="fas fa-search"></i>
    </div>
    <input type="text" placeholder="Search stories by title, url or author" />
  </div>
);

export default searchBar;
