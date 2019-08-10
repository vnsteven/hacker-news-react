import React, { Component, Fragment } from 'react';

import Logo from '../Logo/Logo';
import Searchbar from '../Searchbar/Searchbar';
import Sortbar from '../Sortbar/Sortbar';
import RandomButton from '../RandomButton/RandomButton';
import { Link, Switch, Route } from 'react-router-dom';

import styles from './Navbar.module.css';

class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <header className={styles.Navbar}>
          <div>
            <Switch>
              <Route
                path="/comments"
                component={() => (
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <Logo clicked={this.props.displayAll} />
                  </Link>
                )}
              />
              <Route
                path="/"
                component={() => <Logo clicked={this.props.displayAll} />}
              />
            </Switch>
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
      </Fragment>
    );
  }
}

export default Navbar;
