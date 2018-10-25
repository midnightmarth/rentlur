import React from 'react';

export default class Details extends React.Component {
  constructor(props){
    super(props)

  }
  
  render() {
    return (
        <div>
    <h2>{this.props.details.title}</h2>

    <ul>
      <li>Price: {this.props.details.price} </li>
      <li>Description: {this.props.details.description} </li>
      <li>Map: {this.props.details.mapUrl}</li>
      <li>Reply: {`${this.props.details.replyUrl.hostname}${this.props.details.replyUrl.pathname}`}</li>
      <li>URL: {this.props.details.url} </li>
      <li>Photos: {this.props.details.images[0]} </li>
    </ul>

    </div>
    )
  }
} 



