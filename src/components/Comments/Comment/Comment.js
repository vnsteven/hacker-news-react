import React, { Component } from 'react';
import styles from './Comment.module.css';

class Comment extends Component {
  render() {
    let text = null;

    if (this.props.text) {
      text = this.props.text.replace(/<(.|\n)*?>/g, '');
    }

    return (
      <div className={styles.Comment}>
        <div className={styles.Author}>
          <p>{this.props.author}</p>
        </div>
        <div className={styles.Text}>
          <p>{text}</p>
        </div>
      </div>
    );
  }
}

export default Comment;
