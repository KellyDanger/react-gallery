import React, {Component} from 'react';
import axios from 'axios';

class GalleryItems extends Component {
  state = {
    showDesc: false,
    likeCounter: 0
  }
  showDesc = () => {
    console.log(this.state.showDesc); 
    this.setState({
      showDesc: !this.state.showDesc
    })
  }
  like = () => {
    axios({
      method: 'PUT',
      url: `/gallery/like/${this.props.pic.id}`
    }).then((response) => {
      console.log('response from PUT', response)
      this.props.getGallery();
    }).catch((error) => {
      console.log('error in PUT', error);  
    })
  }
  

  render() {
    return(
      <>
      {this.state.showDesc ? 
      <p onClick={this.showDesc}>{this.props.pic.description}</p>
      :
      <div className="galleryContainer">
        <img height="200px" width="200px"src={this.props.pic.path} alt={this.props.pic.description} onClick={this.showDesc}/>
        <p>Likes: {this.props.pic.likes}</p>
      </div>
      }
      <button className="likeBtn" onClick={this.like}>Like</button>
      </>
    )
  }
}


export default GalleryItems;