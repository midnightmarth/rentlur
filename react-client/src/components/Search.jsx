import React from "react";


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.reset = this.reset.bind(this);
  }

  // set state
  changeState(loc) {
    this.setState({
      location: loc
    });

  }

  // set state while typing
  onChange(e) {
    this.changeState(e.target.value);
  }

  // set state on "return" key
  onKeyPress(e) {
    if (e.which === 13) {
      this.changeState(e.target.value);
      console.log(this.state.location);
      this.reset();
    }
  }

  // reset state
  reset() {
    this.setState({
      location: ''
    });
  }

  render() {
    return ( 
      <div>
        <h4> Search </h4>
        Enter a location: <input value = {this.state.location} onChange = {this.onChange} onKeyPress = {this.onKeyPress}/>        
        <button onClick = {() => {console.log(this.state.location); this.reset()}}> search </button>
      </div>
    )
  }
}


export default Search