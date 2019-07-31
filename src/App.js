import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Items from './components/Items/Items';

const LIST = [
    { title: 'A Message to Our Customers'},
    { title: 'Switch from Chrome to Firefox'},
    { title: 'UK votes to leave EU'},
    { title: 'A Message to you'}
  ]

class App extends Component {
  state = {
    list: LIST 
  }

  matchItemHandler = (event) => {
    const list = LIST 
    const newList = list.filter((item) => {
        return item.title.includes(event.target.value)
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
