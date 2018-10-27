import React from 'react';

const SavedRentalItem = (props) => (
  <div>
    <h4> <a href={props.rental.url}>{props.rental.title}</a> </h4>
    <div>Price: {props.rental.price}</div>
    <div>Location: {props.rental.location}</div>
    <button onClick={()=> props.delete(props.rental.pid)}>Remove</button>
  </div>
)

export default SavedRentalItem;