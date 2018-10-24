import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import List from './components/List.jsx';
import SavedRentals from './components/SavedRentals.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'rentals',
      rentals: [],
      savedRentals:[
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
    this.searchProperties = this.searchProperties.bind(this);
  }
 
  // to be completed later
  componentDidMount() {

  }

  // requires routes
  searchProperties(searchQuery) {
    const post = {
      method: 'post',
      url: '/api/search',
      body: {
        city: searchQuery,
      },
    };

    axios(post).then((response) => {
      this.setState({ rentals: response.data });
    });
  }

  changeView(view) {
    this.setState({
      view: view
    });
  }

  renderMain() {
    if (this.state.view === 'rentals') {
      return (
        <div>
         <Search search={this.searchProperties} /> 
         <List rentals={this.state.rentals} /> 
        </div>
      )
        
    }
    if (this.state.view === 'savedRentals') {
      return <SavedRentals saved={this.state.savedRentals} />
    }
    
  }

  render() {
    return (

      <div>
        <div className='nav-bar'>
          <span className='logo' onClick={() => this.changeView('rentals')}>Rentlur</span>
          <span className='saved-rentals' onClick={() => this.changeView('savedRentals')}>Saved Rentals</span>
        </div>
        <div className='main'>
          
          {this.renderMain()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
