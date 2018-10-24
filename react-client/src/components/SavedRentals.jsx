import React from 'react';
import SavedRentalItem from './SavedRentalItem.jsx';


const SavedRentals = (props) => (
      <div>
        <h1>Saved Rentals</h1>
        <ul>
          {props.saved.map( (item) => (
            <li>
              <SavedRentalItem rental={item}/>
            </li>
            ))
          }
          
        </ul>
      </div>

)
  
    
  


export default SavedRentals