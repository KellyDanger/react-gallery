import axios from 'axios';
import React, {Component} from 'react';

class GalleryList extends Component {

  render(){
    return(
      <div id="gallery">
        {this.props.galleryArray.map((pic) => {
          return <img height="200px" width="200px" key={pic.id} src={pic.path} alt={pic.description}/>
        })}
      </div>
      
    )
  }
}

export default GalleryList;