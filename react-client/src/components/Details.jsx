import React from 'react';

class Details extends React.Component {
  constructor(props){
    super(props);

  }

  waitOnData(obj) {
    // var str = JSON.stringify(obj);
    // str = JSON.parse(str);
    if (!obj) {
      return '';
    }
    if (Array.isArray(obj)) {
      return obj[0];
    }

    if (obj === Object(obj)) {
      return `${this.props.details.replyUrl.hostname}${this.props.details.replyUrl.pathname}`
    }
  }
  
  render() {
    return (
      <div>
        <h2>{this.props.details.title}</h2>
        <ul>
          <li>Price: {this.props.details.price} </li>
          <li>Description: {this.props.details.description} </li>
          <li>Map: {this.props.details.mapUrl}</li>
          <li>Reply: {this.waitOnData(this.props.details.replyUrl)}</li>
          <li>URL: {this.props.details.url} </li>
          <li>Photos: {this.waitOnData(this.props.details.images)} </li>
        </ul>

      </div>
    )
  }
} 

export default Details;

