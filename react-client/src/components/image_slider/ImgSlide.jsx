import React from 'react';
import Image from './Image.jsx';
import Arrow from './Arrow.jsx';
import Grid from 'react-css-grid';

export default class ImgSlide extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentImgIndex: 0,
      imageUrls:    [ 'https://images.craigslist.org/00R0R_5GSFWyGeTBK_600x450.jpg',
      'https://images.craigslist.org/00R0R_5GSFWyGeTBK_600x450.jpg',
      'https://images.craigslist.org/00R0R_2RkysLrrLzQ_600x450.jpg',
      'https://images.craigslist.org/00y0y_6zzsPPN7UN1_600x450.jpg',
      'https://images.craigslist.org/00r0r_gvctJ7hoQp5_600x450.jpg',
      'https://images.craigslist.org/00M0M_gAs1jkscY8_600x450.jpg' ],
    }
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }


  nextSlide(){
  console.log("clicked!");
  if (this.state.currentImgIndex === this.state.imageUrls.length-1){
    this.setState({currentImgIndex: 0});
  } else {
    this.setState({currentImgIndex: this.state.currentImgIndex + 1})
  }

  }

  previousSlide(){
    console.log('clicked!');
  if(this.state.currentImgIndex === 0){
    this.setState({currentImgIndex: this.state.imageUrls.length-1});
  } else {
    this.setState({currentImgIndex: this.state.currentImgIndex - 1});
  }

  }


  render(){
    return (
      <Grid width={100}>      
        <div className="imgSlide">
          <div><Image imgUrl={this.state.imageUrls[this.state.currentImgIndex]} /></div>
          <span> <Arrow direction="right" onClick={this.nextSlide} /> <Arrow direction="left" onClick={this.previousSlide}/></span>
          
          
         
        
        </div>
      </Grid>

  
    )
  }
}

