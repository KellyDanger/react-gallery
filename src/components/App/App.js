import axios from 'axios';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  getGallery = () => {
    axios({
      method: 'GET',
      url: '/songs'
    }).then((response) => {
      console.log('response from GET', response.data);
    }).catch((error) => {
      console.log('error in GET', error);  
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg" alt="goat"/>
      </div>
    );
  }
}

export default App;
