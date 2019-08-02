import React, { Component } from 'react';

import Logo from '../Logo/Logo';
import Searchbar from '../Searchbar/Searchbar';
import Sortbar from '../Sortbar/Sortbar';
import Aux from '../../hoc/Aux';
import RandomButton from '../RandomButton/RandomButton';

import styles from './Navbar.module.css';

class Navbar extends Component {
  render() {
    return (
      <Aux>
        <header className={styles.Navbar}>
          <div>
            <Logo clicked={this.props.displayAll} />
          </div>
          <div className={styles.Searchbar}>
            <Searchbar changed={this.props.searchbarChanged} />
          </div>
          <div>
            <RandomButton clicked={this.props.randomChanged} />
          </div>
        </header>
        <Sortbar
          changed={this.props.sortbarChanged}
          results={this.props.results}
          favorites={this.props.favoriteCounter}
        />
      </Aux>
    );
  }
}

export default Navbar;
