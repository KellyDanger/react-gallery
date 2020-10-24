import axios from 'axios';
import React, {Component} from 'react';
import GalleryItems from '../GalleryItems/GalleryItems';

class GalleryList extends Component {
  render(){
    return(
      <>
      {this.props.galleryArray.map((pic) => {
        return <GalleryItems pic={pic}/>
      })}
      </>
    )
  }
}


export default GalleryList;