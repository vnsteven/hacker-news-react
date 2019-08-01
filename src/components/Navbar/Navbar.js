import React, { Component } from 'react';

import Logo from '../Logo/Logo';
import Searchbar from '../Searchbar/Searchbar';
import Sortbar from '../Sortbar/Sortbar';
import Aux from '../../hoc/Aux';

import styles from './Navbar.module.css';

class Navbar extends Component {
  render() {
    return (
      <Aux>
        <header className={styles.Navbar}>
          <div>
            <Logo />
          </div>
          <div className={styles.Searchbar}>
            <Searchbar changed={this.props.searchbarChanged} />
          </div>
          <div></div>
        </header>
        <Sortbar changed={this.props.sortbarChanged} results={this.props.results} />
      </Aux>
    );
  }
}

export default Navbar;
