import React from 'react';

const Arrow = props => {
  return (
    <div 
    className={`slide-arrow ${props.direction}` }
    onClick={props.clickHandler}>
    {props.arrow}
    </div>
  )
}