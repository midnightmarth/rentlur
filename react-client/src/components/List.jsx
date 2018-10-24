import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> List Component </h4>
    There are { props.rentals.length } items.
    { props.rentals.map(rental => <ListItem rental={rental}/>)}
  </div>
)

export default List;