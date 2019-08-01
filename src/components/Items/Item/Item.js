import React, { Component } from 'react';

import styles from './Item.module.css';

class Item extends Component {
  render() {
    return (
      <div className={styles['Item']} onDoubleClick={this.props.doubleClicked}>
        <p>
          <a
            className={styles.Title}
            href={this.props.url}
            target="_blank"
            rel="noopener noreferrer">
            {this.props.title}
          </a>
        </p>
        <p className={styles.Subtitles}>
          {this.props.score} points | {this.props.author} |{' '}
          <a
            className={styles.Link}
            href={this.props.url}
            target="_blank"
            rel="noopener noreferrer">
            ({this.props.url})
          </a>
        </p>
      </div>
    );
  }
}

export default Item;
