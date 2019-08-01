import React from 'react';

import styles from './RandomButton.module.css';
import LogoAlgolia from '../../assets/images/logo-algolia.png';

const randomButton = (props) => (
  <img
    src={LogoAlgolia}
    alt="logo-algolia"
    className={styles.Button}
    onClick={props.clicked}
  />
);

export default randomButton;
