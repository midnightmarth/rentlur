import React from 'react';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';

const Arrow = props => {
  return (
    <div
    className={`${props.direction}-arrow`}
    onClick={props.onClick}> 
    {props.direction === 'right' ? (<ArrowForward onClick={props.onClick}></ArrowForward>) : (<ArrowBack onClick={props.onClick}></ArrowBack>)}
    </div> 
  )
}

export default Arrow;