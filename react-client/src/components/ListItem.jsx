import React from 'react';
import { NavLink } from 'react-router-dom';

// const ListItem = (props) => (
//   <div>
//     <h4> <a href={props.rental.url}>{props.rental.title}</a> </h4>
//     <div>Price: {props.rental.price}</div>
//     <div>Location: {props.rental.location}</div>
//     <div onClick={() => props.retrieve(props.rental)}>
//       <NavLink to='/details'>Details</NavLink>
//     </div>
//     {/* <button onClick={() => props.retrieve(props.rental)}>Details</button> */}
//   </div>
// )
const ListItem = props => (
  <div>
    <h4>
      {' '}
      <a href={props.rental.url} target="_blank" rel="noopener noreferrer">
        {props.rental.title}
      </a>
      {' '}
    </h4>
    <div>
      Price:
      {props.rental.price}
    </div>
    <div>
      Location:
      {props.rental.location}
    </div>
    <div
      onClick={() => {
        props.retrieve(props.rental);
      }}
    >
      <NavLink to="/details">Details</NavLink>
    </div>
    <button type="submit" onClick={() => props.fav(props.rental)}>Save to favorites</button>
  </div>
);

export default ListItem;
