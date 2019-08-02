import React from 'react';

import styles from './Sortbar.module.css';

const sortbar = (props) => (
  <header className={styles.Sortbar}>
    <div className={styles.Search}>
      <form>
        Sort by
        <select onChange={props.changed}>
          <option>All</option>
          <option>Popularity</option>
          <option>Unpopularity</option>
          <option>Title</option>
          <option>Favorites</option>
        </select>
      </form>
    </div>
    <p className={styles.Results}>
      <span className={styles.Favorite}>
        {props.favorites}
        <i className="fas fa-star"></i>
      </span>
      | {props.results} results
    </p>
  </header>
);

export default sortbar;
