import React, { Component } from 'react';

import Item from './Item/Item';

import styles from './Items.module.css';

class Items extends Component {
  render () {
    return (
      <div className={styles.List}>
          {this.props.items.map((item) => {
            return (
              <Item 
                title={item.title} 
                score={item.score}
                url={item.url}
                author={item.author}
              /> 
            )
          })}
      </div>
    )
  }
}

export default Items;
