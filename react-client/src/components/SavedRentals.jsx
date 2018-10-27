import React from 'react';
import SavedRentalItem from './SavedRentalItem.jsx';


// const SavedRentals = (props) => (
//       <div>
//         <h1>Saved Rentals</h1>
//         <ul>
//           {props.saved.map( (item, index) => (
//             <li key={index}>
//               <SavedRentalItem rental={item}/>
//             </li>
//             ))
//           }
          
//         </ul>
//       </div>

// )
class SavedRentals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favs: [
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
    this.flag = false;
  }


  componentDidUpdate() {
    if (this.flag === false) {
      this.setState({
        favs: this.props.saved
      },() => this.flag = true);
    }
  }

  componentDidMount() {
    this.flag = false;
  }

  render() {
    return (
          <div>
            <h1>Saved Rentals</h1>
            <ul>
              {
                this.state.favs.map( (item, index) => (
                <li key={index}>
                  <SavedRentalItem rental={item} delete={this.props.delete}/>
                </li>
                )) 
              }
            </ul>
          </div>
    
    )
  } 
} 
  
    
  


export default SavedRentals