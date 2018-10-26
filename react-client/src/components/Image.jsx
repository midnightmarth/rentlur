import React from 'react';

const Image = (props) => {
  const styles = {
    backgroundImage: `url(${props.imgUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <div className="img" style={styles}></div>
  )

}
export default Image;