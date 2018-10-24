import React from 'react';
import SavedRentalItem from './SavedRentalItem';


class SavedRentals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedRentals: [
        {
        "category": "austin.craigslist.org",
        "date": "2018-10-24 11:04",
        "hasPic": true,
        "location": "(South Central)",
        "pid": "6716480754",
        "price": "$1070",
        "title": "Massive Closets ~ Hardwoods ~ Close To St. Ed's University!",
        "url": "https://austin.craigslist.org/apa/d/massive-closets-hardwoods/6716480754.html"
    },
    {
        "category": "austin.craigslist.org",
        "date": "2018-10-24 11:04",
        "hasPic": true,
        "location": "(3011 Whitis Ave)",
        "pid": "6726748723",
        "price": "$1150",
        "title": "Parks and Recreation, Walkabilty 100%",
        "url": "https://austin.craigslist.org/apa/d/parks-and-recreation/6726748723.html"
    }
  ]
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
              <SavedRentalItem rental={item}/>
            </li>
            }
          )}
        </ul>
      </div>
    )
  }
}

export default SavedRentals