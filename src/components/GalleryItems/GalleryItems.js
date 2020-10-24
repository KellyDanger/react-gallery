import React, {Component} from 'react';

class GalleryItems extends Component {
  state = {
    showDesc: false
  }
  showDesc = () => {
    console.log(this.state.showDesc); 
    this.setState({
      showDesc: !this.state.showDesc
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
      </div>
      }
      </>
    )
  }
}


export default GalleryItems;