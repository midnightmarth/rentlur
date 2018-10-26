import React from 'react';

const Arrow = props => {
  return (
    <div
    className={`${props.direction}-arrow`}
    onClick={props.onClick}>
    {props.arrow}
    </div>
  )
}

export default Arrow;