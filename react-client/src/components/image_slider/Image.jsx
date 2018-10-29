import React from 'react';

const Image = (props) => {
  const styles = {
    // // backgroundImage: `url(${props.imgUrl})`,
    // backgroundImage: `url(${props.imgUrl})`,
    backgroundSize: '500px 500px',
    backgroundPosition: 'center',
  }

  return (
    <div className="img" style={styles}>
      <img src={props.imgUrl}></img>
    </div>
  )

}
export default Image;