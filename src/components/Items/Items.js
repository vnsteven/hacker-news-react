import React, { Component } from 'react';

import Item from './Item/Item';

import styles from './Items.module.css';

class Items extends Component {
  render() {
    return (
      <div className={styles.List}>
        {this.props.items.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              title={item.title}
              score={item.score}
              url={item.url}
              author={item.by}
              time={item.time}
              comments={item.kids}
              clicked={() => this.props.favorites(item.id)}
              favoriteList={this.props.favoriteList}
              commentList={() => this.props.commentList(item.kids)}
            />
          );
        })}
      </div>
    );
  }
}

export default Items;
