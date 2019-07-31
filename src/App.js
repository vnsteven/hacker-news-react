import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Items from './components/Items/Items';
import './App.css';
import axios from './axios-hn.js';

const LIST = []

class App extends Component {
  state = {
    list: LIST 
  }

  async componentDidMount() {
    try {
      const fetchingData = await axios.get('topstories.json')
      const itemIds = await fetchingData.data
      itemIds.forEach((id) => {
        axios.get(`item/${id}.json`)
          .then((res) => LIST.push({ 
            title: res.data.title,
            score: res.data.score,
            url: res.data.url,
            author: res.data.by
          }))
      })
      this.setState({list: LIST})
    } catch (err) {
      console.log(err)
    }
  }

  matchItemHandler = (event) => {
    const list = [...LIST] 
    const newList = list.filter((item) => {
        return item.title.toLowerCase().includes(event.target.value.toLowerCase())
    })
    this.setState({list: newList});
  }

  render() {
    return (
      <div className="App">
        <Navbar changed={this.matchItemHandler}/>
        <Items items={this.state.list}/>
        <Footer />
      </div>
    );
  }
}

export default App;
