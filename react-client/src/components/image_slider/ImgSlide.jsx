import React from 'react';
import Image from './Image.jsx';
import Arrow from './Arrow.jsx';
import Grid from '@material-ui/core/Grid';

export default class ImgSlide extends React.Component{
  constructor(props){
    super(props);

    /// Change imageUrls to this.props.details.images in production
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
      <Grid container spacing={24} justify="center">
        <Grid>
      <Image imgUrl={this.state.imageUrls[this.state.currentImgIndex]} />
      </Grid>
      <Grid container spacing={40} justify="center" alignContent="stretch">
      <Grid item justify="left">
        <Arrow direction="left" onClick={this.previousSlide}/>
        </Grid>
        <Grid item justify="right">
        <Arrow direction="right" onClick={this.nextSlide} />
        </Grid>
      </Grid>
      </Grid>

  
    )
  }
}

