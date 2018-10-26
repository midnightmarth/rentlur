import React from 'react';
import ListItem from './ListItem.jsx';

// const List = props => (
//   <div>
//     <h4> List Component </h4>
//     There are
//     {' '}
//     { props.rentals.length }
//     {' '}
// items.
//     { props.rentals.map((rental, index) => <ListItem key={index} retrieve={props.retrieve} rental={rental} />)}
//   </div>
// );
class List extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       selected: 0
     };
     this.handleClick = this.handleClick.bind(this);
   }

  handleClick(option, listing) {
    console.log(option);
    this.setState({
      selected: option
    });
    this.props.retrieve(option, listing);
  }


  render() { 
    return (
      <div>
        <h4> List Component </h4>
        There are
        {' '}
        { this.props.rentals.length }
        {' '}
    items.
        { this.props.rentals.map((rental, index) => 
        <ListItem key={index} handleClick={this.handleClick} rental={rental} index={index}/>
        )}
      </div>
    )
  }
};

export default List;
