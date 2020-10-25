import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'

class App extends Component {
  state = {
    galleryArray: [],
  }
  componentDidMount = () => {
    this.getGallery();
  }

  getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log('response from GET', response.data);
      this.setState({
        galleryArray: response.data
      })
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
        <GalleryList galleryArray={this.state.galleryArray} getGallery={this.getGallery}/>
              
      </div>
    );
  }
}

export default App;
