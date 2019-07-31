import React, { Component }from 'react';

import Logo from '../Logo/Logo';
import Searchbar from '../Searchbar/Searchbar';

import styles from './Navbar.module.css';

class Navbar extends Component {
  render () {
    return (
      <header className={styles.Navbar}>
        <div>
          <Logo />
        </div>
        <div className={styles.Searchbar}>
          <Searchbar changed={this.props.changed}/>
        </div>
        <div></div>
      </header>
    )
  }
}

export default Navbar;
