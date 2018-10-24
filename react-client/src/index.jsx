import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rentals: [{
        category: 'austin.craigslist.org',
        date: '2018-10-24 11:04',
        hasPic: true,
        location: '(South Central)',
        pid: '6716480754',
        price: '$1070',
        title: "Massive Closets ~ Hardwoods ~ Close To St. Ed's University!",
        url: 'https://austin.craigslist.org/apa/d/massive-closets-hardwoods/6716480754.html',
      },
      {
        category: 'austin.craigslist.org',
        date: '2018-10-24 11:04',
        hasPic: true,
        location: '(3011 Whitis Ave)',
        pid: '6726748723',
        price: '$1150',
        title: 'Parks and Recreation, Walkabilty 100%',
        url: 'https://austin.craigslist.org/apa/d/parks-and-recreation/6726748723.html',
      }],
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

  render() {
    return (
      <div>
        <h1>Rentlur</h1>
        <Search search={this.searchProperties} />
        <List rentals={this.state.rentals} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
