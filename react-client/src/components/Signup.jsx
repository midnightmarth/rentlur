import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      username: '',
      password: ''
    }

    this.onNameChange =this.onNameChange.bind(this);
    this.onEmailChange =this.onEmailChange.bind(this);
    this.onUserChange =this.onUserChange.bind(this);
    this.onPssChange =this.onPssChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }
  onEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }
  onUserChange(e) {
    this.setState({
      user: e.target.value
    });
  }
  onPssChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleSubmit(e) {
    console.log(this.state.name, this.state.email, this.state.username, this.state.password);
    e.preventDefault();
  }

  render() {
    return (
      <div>
      <form onSubmit={}>
        <label>
          <input value={this.state.name} onChange={this.onNameChange}/> 
        </label>
        <label>
          <input value={this.state.email} onChange={this.onEmailChange}/> 
        </label>
        <label>
          <input value={this.state.username} onChange={this.onUserChange}/> 
        </label>
        <label>
          <input value={this.state.password} onChange={this.onPssChange}/> 
        </label>
          <input type='submit' value='Submit'/>
      </form>
      </div>
    )
  }
}

export default Signup;