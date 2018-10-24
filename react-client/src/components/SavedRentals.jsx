import React from 'react'
import ListItem from './ListItem';


class SavedRentals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedRentals: []
    };
    this.updateSavedRentals = this.updateSavedRentals.bind(this);
  }

  updateSavedRentals () {
    let savedArr = [];
    this.props.saved.map((item) => {
        savedArr.push(item);
      }
    );
    this.setState({
      savedRentals: savedArr
    });
  }

  render() {
    return (
      <div>
        <h1>Saved Rentals</h1>
        <ul>
          {this.state.savedRentals.map((item) => {
            <li>
              <RentalsItem item={item}/>
            </li>
            }
          )}
        </ul>
      </div>
    )
  }
}

export default SavedRentals