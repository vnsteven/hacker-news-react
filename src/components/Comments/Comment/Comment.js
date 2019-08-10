import React from 'react';
import styles from './Comment.module.css';

const comment = (props) => (
  <div className={styles.Comment}>
    <div className={styles.Author}>
      <p>{props.author}</p>
    </div>
    <div className={styles.Text}>
      <p>{props.text.replace(/<(.|\n)*?>/g, '')}</p>
    </div>
  </div>
);

export default comment;
