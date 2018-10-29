import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      username: '',
      password: '',
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onUserChange = this.onUserChange.bind(this);
    this.onPssChange = this.onPssChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reset = this.reset.bind(this);
  }

  onNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onUserChange(e) {
    this.setState({
      username: e.target.value,
    });
  }
  
  onPssChange(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleSubmit(e) {
    this.props.signup(this.state.username, this.state.password);
    e.preventDefault();
    this.reset();
  }

  reset() {
    this.setState({
      name: '',
      email: '',
      username: '',
      password: '',
    });
  }

  render() {
    return (
      <div className="signup-block">
        <h1>Signup</h1>
        <form onSubmit={this.handleSubmit}>
          {/* <input value={this.state.name} onChange={this.onNameChange} placeholder= 'name'/><br/>
          <input value={this.state.email} onChange={this.onEmailChange} placeholder= 'email'/> <br/> */}
          <input
            type="username"
            value={this.state.username}
            onChange={this.onUserChange}
            placeholder="username"
          />
          {' '}
          <br />
          <input
            type="password"
            value={this.state.password}
            onChange={this.onPssChange}
            placeholder="password"
          />
          {' '}
          <br />
          <input className="sign-up-submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Signup;
