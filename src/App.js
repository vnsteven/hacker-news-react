import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Items from './components/Items/Items';
import './App.css';
import axios from './axios-hn.js';

const LIST = [];

class App extends Component {
  state = {
    list: LIST
  };

  async componentDidMount() {
    try {
      const fetchingData = await axios.get('topstories.json');
      const itemIds = await fetchingData.data;
      itemIds.forEach((id) => {
        axios.get(`item/${id}.json`).then((res) =>
          LIST.push({
            id: res.data.id,
            title: res.data.title,
            score: res.data.score,
            url: res.data.url,
            author: res.data.by
          })
        );
      });
    } catch (err) {
      console.log(err);
    }
  }

  matchItemHandler = (event) => {
    const list = [...LIST];
    const newList = list.filter((item) => {
      return item.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    this.setState({ list: newList });
  };

  sortItemHandler = (event) => {
    const list = [...this.state.list];
    if (event.target.value === 'Title') {
      const sortedList = list.sort((a, b) => (a.title > b.title ? 1 : -1));
      this.setState({ list: sortedList });
    } else if (event.target.value === 'Popularity') {
      const sortedList = list.sort((a, b) => (a.score > b.score ? -1 : 1));
      this.setState({ list: sortedList });
    } else if (event.target.value === 'Unpopularity') {
      const sortedList = list.sort((a, b) => (a.score > b.score ? 1 : -1));
      this.setState({ list: sortedList });
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar
          searchbarChanged={this.matchItemHandler}
          sortbarChanged={this.sortItemHandler}
        />
        <Items items={this.state.list} />
        <Footer />
      </div>
    );
  }
}

export default App;
