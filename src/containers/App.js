import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Items from '../components/Items/Items';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Comments from '../components/Comments/Comments';
import * as actions from '../store/actions/index';

class App extends Component {
  componentDidMount() {
    this.props.onInitData();
  }

  render() {
    return (
      <div className="App">
        <Navbar
          searchbarChanged={this.props.onMatchItems}
          sortbarChanged={this.props.onSortItems}
          results={this.props.count}
          favoriteCounter={this.props.favCount}
          randomChanged={this.props.onRandomItem}
          displayAll={this.props.onDisplayItems}
        />
        <Switch>
          <Route
            path="/comments"
            component={() => <Comments comments={this.props.cmts} />}
          />
          <Route
            path="/"
            component={() => (
              <Items
                items={this.props.list}
                delete={this.props.onDeleteItem}
                favorites={this.props.onFavoriteItems}
                favoriteList={this.props.fav}
                commentList={this.props.onInitComments}
              />
            )}
          />
        </Switch>
        <Footer page={this.props.onInitPage} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
    count: state.count,
    fav: state.favoriteList,
    favCount: state.favoriteCount,
    cmts: state.commentList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitData: () => dispatch(actions.initData()),
    onInitComments: (comments) => dispatch(actions.initComments(comments)),
    onInitPage: (page) => dispatch(actions.initPage(page)),
    onMatchItems: (inputSearchbar) =>
      dispatch(actions.matchItems(inputSearchbar)),
    onSortItems: (inputSortbar) => dispatch(actions.sortItems(inputSortbar)),
    onRandomItem: () => dispatch(actions.randomItem()),
    onFavoriteItems: (favItem) => dispatch(actions.favoriteItems(favItem)),
    onDisplayItems: () => dispatch(actions.displayItems())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
