import React, { Component } from 'react';

import styles from './Item.module.css';

class Item extends Component {
  state = {
    favorite: false
  };

  changeColor = () => {
    if (!this.state.favorite) {
      this.setState({ favorite: true });
    } else {
      this.setState({ favorite: false });
    }
  };

  render() {
    const favoriteItem = this.props.favoriteList.find(
      (obj) => obj.title === this.props.title
    );

    let itemClass = null;

    if (this.state.favorite && favoriteItem) {
      itemClass = 'ItemFavorite';
    } else {
      itemClass = 'Item';
    }

    return (
      <div
        className={styles[itemClass]}
        onDoubleClick={this.props.doubleClicked}
        onClick={() => {
          this.changeColor();
          this.props.clicked();
        }}>
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
