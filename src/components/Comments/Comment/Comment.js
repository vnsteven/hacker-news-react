import React from 'react';
import styles from './Comment.module.css';

const comment = (props) => (
  <div className={styles.Comment}>
    {props.author} : {props.text}
  </div>
);

export default comment;
