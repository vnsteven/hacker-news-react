import React, { Component } from 'react';

import styles from './Item.module.css';

class Item extends Component {
  render() {
    return (
      <div className={styles.Item}>
        <p>{this.props.title}</p>
        <p className={styles.Subtitles}>
          {this.props.score} points | {this.props.author} |{' '}
          <a href={this.props.url} target="_blank" rel="noopener noreferrer">
            ({this.props.url})
          </a>
        </p>
      </div>
    );
  }
}

export default Item;
