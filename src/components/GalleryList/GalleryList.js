import React, {Component} from 'react';
import GalleryItems from '../GalleryItems/GalleryItems';

class GalleryList extends Component {
  render(){
    return(
      <div>
      {this.props.galleryArray.map((pic) => {
        return <GalleryItems pic={pic} getGallery={this.props.getGallery}/>
      })}
      </div>
    )
  }
}


export default GalleryList;