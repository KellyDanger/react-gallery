import React, {Component} from 'react';

class GalleryItems extends Component {

  render() {
    return(
      <img height="200px" width="200px" key={this.props.pic.id} src={this.props.pic.path} alt={this.props.pic.description}/>
    )
  }
}


export default GalleryItems;