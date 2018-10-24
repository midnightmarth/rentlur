import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx'
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rentals: [],
    };
    this.searchProperties = this.searchProperties.bind(this);
  }
  // to be completed later
  componentDidMount() {

  }
  //requires routes
  searchProperties(searchQuery) {
    const post = {
      method: 'post',
      url: '/api/properties',
      body: {
        q: searchQuery,
      },
    };
  
    axios(post).then((response) => {
      console.log(response);
    });
  }

  render() {
    return (
      <div>
        <h1>Rentlur</h1>
        <Search search={this.searchProperties} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
