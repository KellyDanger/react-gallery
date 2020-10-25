import React, {Component} from 'react';
import axios from 'axios';
import '../GalleryItems/GalleryItems.css';

class GalleryItems extends Component {
  state = {
    showDesc: false,
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
      <div className="galleryContainer">
         <p onClick={this.showDesc}>{this.props.pic.description}</p>
      </div>
     
      :
      <div className="galleryContainer">
        <img src={this.props.pic.path} alt={this.props.pic.description} onClick={this.showDesc}/>
        <br></br>
        <button className="likeBtn" onClick={this.like}>Like</button>
        <p>Likes: {this.props.pic.likes}</p>

      </div>
      }
      
      </>
    )
  }
}


export default GalleryItems;