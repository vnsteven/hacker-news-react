import React, { Component } from 'react';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Items from '../components/Items/Items';
import './App.css';
import axios from './axios-hn.js';

class App extends Component {
  state = {
    list: [],
    initialList: [],
    favoriteList: [],
    count: 0,
    favoriteCount: 0
  };

  async componentDidMount() {
    try {
      const fetchingData = await axios.get('topstories.json');
      const itemIds = await fetchingData.data;
      const list = [];
      itemIds.forEach((id) => {
        axios.get(`item/${id}.json`).then((res) =>
          list.push({
            id: res.data.id,
            title: res.data.title,
            score: res.data.score,
            url: res.data.url,
            author: res.data.by
          })
        );
      });
      this.setState({ initialList: list });
    } catch (err) {
      console.error(err);
    }
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
    if (event.target.value === 'Title') {
      const sortedList = list.sort((a, b) => (a.title > b.title ? 1 : -1));
      this.setState({ list: sortedList, count: sortedList.length });
    } else if (event.target.value === 'Popularity') {
      const sortedList = list.sort((a, b) => (a.score > b.score ? -1 : 1));
      this.setState({ list: sortedList, count: sortedList.length });
    } else if (event.target.value === 'Unpopularity') {
      const sortedList = list.sort((a, b) => (a.score > b.score ? 1 : -1));
      this.setState({ list: sortedList, count: sortedList.length });
    } else if (event.target.value === 'All') {
      this.setState({
        list: this.state.initialList,
        count: this.state.initialList.length
      });
    } else if (event.target.value === 'Favorites') {
      this.setState({
        list: this.state.favoriteList,
        count: this.state.favoriteList.length
      });
    }
  };

  deleteItemHandler = (item) => {
    const list = [...this.state.list];
    const element = this.state.initialList.find((el) => el.id === item);
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
      list: this.state.initialList,
      count: this.state.initialList.length
    });
  };

  favoritesHandler = (item) => {
    const element = this.state.initialList.find((el) => el.id === item);
    const { favoriteList } = this.state;
    if (!favoriteList.includes(element)) {
      favoriteList.push(element);
    }
    this.setState({ favoriteCount: this.state.favoriteList.length });
  };

  render() {
    return (
      <div className="App">
        <Navbar
          searchbarChanged={this.matchItemHandler}
          sortbarChanged={this.sortItemHandler}
          results={this.state.count}
          favoriteCounter={this.state.favoriteCount}
          randomChanged={this.randomChangedHandler}
          displayAll={this.displayAllHandler}
        />
        <Items
          items={this.state.list}
          delete={this.deleteItemHandler}
          favorites={this.favoritesHandler}
          favoriteList={this.state.favoriteList}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
