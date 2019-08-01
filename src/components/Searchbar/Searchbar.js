import React from 'react';

import styles from './Searchbar.module.css';

const searchbar = (props) => (
  <div className={styles.Searchbar}>
    <div className={styles.Icon}>
      <i className="fas fa-search"></i>
    </div>
    <input
      type="text"
      placeholder="Search stories by title"
      onChange={props.changed}
    />
  </div>
);

export default searchbar;
