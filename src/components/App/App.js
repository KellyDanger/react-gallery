import axios from 'axios';
import React, { Component } from 'react';
import './App.css';

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
        <p>Gallery goes here</p>
        {this.state.galleryArray.map((pic) => {
          return <img height="200px" width="200px" src={pic.path} alt={pic.description}/>
        })}
        
      </div>
    );
  }
}

export default App;
