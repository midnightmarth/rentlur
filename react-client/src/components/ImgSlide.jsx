import React from 'react';
import Image from './Image';

class ImgSlide extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentImgIndex: 0,
    }
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  nextSlide(){

  }

  prevSlide(){

  }

  render(){
    return (
      <div className="imgSlide">
        <Image url
      </div>
    )
  }
}