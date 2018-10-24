import React from 'react';

const SavedRentalItem = (props) => (
  <div>
    <h4> <a href={props.rental.url}>{props.rental.title}</a> </h4>
    <div>Price: {props.rental.price}</div>
    <div>Location: {props.rental.location}</div>
  </div>
)

export default SavedRentalItem;