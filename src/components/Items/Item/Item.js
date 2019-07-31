import React, { Component } from 'react';

import styles from './Item.module.css';

class Item extends Component {
  render () {
    return (
      <div className={styles.Item}>
        <p>{this.props.title}</p>
      </div>
    )
  }
}

export default Item;
