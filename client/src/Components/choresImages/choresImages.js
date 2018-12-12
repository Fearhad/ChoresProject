import React, { Component } from 'react';
import image1 from '../../assets/images/babysitting.png';
import image2 from '../../assets/images/bathroom-sink.png';
import image3 from '../../assets/images/clean-countertop.png';
import image4 from '../../assets/images/dirty-dishes.png';
import image5 from '../../assets/images/dishwasher.png';
import image6 from '../../assets/images/feed-dog.png';
import image7 from '../../assets/images/fold-laundry.png';
import image8 from '../../assets/images/garbage.png';
import image9 from '../../assets/images/laundry.png';
import image10 from '../../assets/images/mop-floor.png';
import image11 from '../../assets/images/mow-lawn.png';
import image12 from '../../assets/images/oven.png';
import image13 from '../../assets/images/rake-leaves.png';
import image14 from '../../assets/images/recycling.png';
import image15 from '../../assets/images/set-table.png';
import image16 from '../../assets/images/sweep.png';
import image17 from '../../assets/images/toys.png';
import image18 from '../../assets/images/vacuum.png';
import image19 from '../../assets/images/walk-dog.png';
import './choreimages.css';


var images =[
  {
    id:1,
    url: image1,
    clicked:false
  },
  {
    id:2,
    url: image2,
    clicked:false
  },
  {
    id:3,
    url: image3,
    clicked:false
  },
  {
    id:4,
    url: image4,
    clicked:false
  },
  {
    id:5,
    url: image5,
    clicked:false
  },
  {
    id:6,
    url: image6,
    clicked:false
  },
  {
    id:7,
    url: image7,
    clicked:false
  },
  {
    id:8,
    url: image8,
    clicked:false
  },
  {
    id:9,
    url: image9,
    clicked:false
  },
  {
    id:10,
    url: image10,
    clicked:false
  },
  {
    id:11,
    url: image11,
    clicked:false
  },
  {
    id:12,
    url: image12,
    clicked:false
  },
  {
    id:13,
    url: image13,
    clicked:false
  },
  {
    id:14,
    url: image14,
    clicked:false
  },
  {
    id:15,
    url: image15,
    clicked:false
  },
  {
    id:16,
    url: image16,
    clicked:false
  },
  {
    id:17,
    url: image17,
    clicked:false
  },
  {
    id:18,
    url: image18,
    clicked:false
  },
  {
    id:19,
    url: image19,
    clicked:false
  },
 
];

class Images extends Component {

  state = {
    images:images,
    // score: 0,
    
  };


  handleimageclick = (id) => {
    console.log(id);  
    console.log(this.state);
    let allImages = [...this.state.images]
    const isClicked = allImages[id].clicked    
    allImages[id].clicked =  true
    this.setState( {images:allImages})      
  }


  render() {

    var displayimages = this.state.images.map ((eachitem,index) => 
      <img  key={index} className="click-image"  src={eachitem.url} onClick={() =>this.handleimageclick(index)} alt={eachitem.id}></img>
    )

    return (
      <div className="images">

          <div className="images-container"> 
               <div className="images"> {displayimages} </div>
          </div>

                 
      </div>
    );
  }
}

export default Images;
