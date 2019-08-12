import React, { Component } from 'react';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Items from '../components/Items/Items';
import './App.css';
import axios from './axios-hn.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Comments from '../components/Comments/Comments';

class App extends Component {
  state = {
    list: [],
    initialList: [],
    favoriteList: [],
    commentList: [],
    count: 0,
    favoriteCount: 0
  };

  async componentDidMount() {
    try {
      const response = await axios.get('topstories.json');

      if (!response) {
        throw new Error('Error');
      }

      const data = await response.data;

      const promises = data
        .slice(0, 10)
        .map((id) =>
          axios.get(`item/${id}.json`).then((response) => response.data)
        );

      const result = await Promise.all(promises);

      this.setState({
        list: [...result],
        initialList: [...result],
        count: result.length
      });
    } catch (err) {
      console.error(err);
    }

    //try {
    //  const fetchingData = await axios.get('topstories.json');
    //  const itemIds = await fetchingData.data;
    //  itemIds.forEach((id) => {
    //    axios.get(`item/${id}.json`).then((res) =>
    //      this.setState({
    //        initialList: [
    //          ...this.state.initialList,
    //          {
    //            id: res.data.id,
    //            title: res.data.title,
    //            score: res.data.score,
    //            url: res.data.url,
    //            author: res.data.by,
    //            time: res.data.time,
    //            kids: res.data.kids
    //          }
    //        ]
    //      })
    //    );
    //  });
    //} catch (err) {
    //  console.error(err);
    //}
  }

  matchItemHandler = (event) => {
    const list = [...this.state.initialList];
    const newList = list.filter((item) => {
      return item.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    this.setState({ list: newList, count: newList.length });
  };

  sortItemHandler = (event) => {
    const list = [...this.state.list];
    const initialList = [...this.state.initialList];
    const favoriteList = [...this.state.favoriteList];
    const sortBy = event.target.value;
    let sortedList = null;

    switch (sortBy) {
      default:
      case 'Title':
        sortedList = list.sort((a, b) => (a.title > b.title ? 1 : -1));
        this.setState({ list: sortedList, count: sortedList.length });
        break;
      case 'Popularity':
        sortedList = list.sort((a, b) => (a.score > b.score ? -1 : 1));
        this.setState({ list: sortedList, count: sortedList.length });
        break;
      case 'Unpopularity':
        sortedList = list.sort((a, b) => (a.score > b.score ? 1 : -1));
        this.setState({ list: sortedList, count: sortedList.length });
        break;
      case 'All':
        this.setState({
          list: initialList,
          count: initialList.length
        });
        break;
      case 'Favorites':
        this.setState({
          list: favoriteList,
          count: favoriteList.length
        });
        break;
    }
  };

  deleteItemHandler = (item) => {
    const list = [...this.state.list];
    const initialList = [...this.state.initialList];
    const element = initialList.find((el) => el.id === item);
    list.splice(list.indexOf(element), 1);
    this.setState({ list: list, count: list.length });
  };

  randomChangedHandler = () => {
    const list = [...this.state.initialList];
    const randomNumber = Math.floor(Math.random() * (list.length - 1));
    this.setState({
      list: [list[randomNumber]],
      count: 1
    });
  };

  displayAllHandler = () => {
    this.setState({
      list: [...this.state.initialList],
      count: this.state.list.length
    });
  };

  favoritesHandler = (item) => {
    const element = this.state.list.find((el) => el.id === item);
    const favorites = [...this.state.favoriteList];

    if (!favorites.includes(element)) {
      this.setState({
        favoriteList: [element, ...favorites],
        favoriteCount: favorites.length + 1
      });
    } else {
      favorites.splice(favorites.indexOf(element), 1);
      this.setState({
        favoriteList: favorites,
        favoriteCount: favorites.length
      });
    }
  };

  commentHandler = (kids) => {
    this.setState({ commentList: [] });
    kids.forEach((kid) => {
      axios.get(`/item/${kid}.json`).then((res) => {
        this.setState({
          commentList: [
            ...this.state.commentList,
            {
              id: res.data.id,
              author: res.data.by,
              text: res.data.text
            }
          ]
        });
      });
    });
  };

  pageHandler = async (num) => {
    const response = await axios.get('topstories.json');
    const data = await response.data;
    const promises = data
      .slice(parseInt(`${num - 1}0`), parseInt(`${num}0`))
      .map((id) =>
        axios.get(`item/${id}.json`).then((response) => response.data)
      );

    const result = await Promise.all(promises);

    this.setState({
      list: [...result],
      initialList: [...result],
      count: result.length
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar
            searchbarChanged={this.matchItemHandler}
            sortbarChanged={this.sortItemHandler}
            results={this.state.count}
            favoriteCounter={this.state.favoriteCount}
            randomChanged={this.randomChangedHandler}
            displayAll={this.displayAllHandler}
          />
          <Switch>
            <Route
              path="/comments"
              component={() => <Comments comments={this.state.commentList} />}
            />
            <Route
              path="/"
              component={() => (
                <Items
                  items={this.state.list}
                  delete={
                    /*(id) => this.props.deleteItem(id, this.state.list)*/ this
                      .deleteItemHandler
                  }
                  favorites={this.favoritesHandler}
                  favoriteList={this.state.favoriteList}
                  commentList={this.commentHandler}
                />
              )}
            />
          </Switch>
          <Footer page={this.pageHandler} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
