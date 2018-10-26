import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.onUserChange = this.onUserChange.bind(this);
    this.onPassChange = this.onPassChange.bind(this);
    this.onUserKeyPress = this.onUserKeyPress.bind(this);
    this.onPassKeyPress = this.onPassKeyPress.bind(this);
    this.reset = this.reset.bind(this);
  }


  onUserChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  onPassChange(e) {
    this.setState({
      password: e.target.value
    });
  }
  
  onUserKeyPress(e) {
    if (e.which === 13 && !this.flag) {
      console.log(this.state.username, this.state.password);
      this.reset();
    }
  }

  onPassKeyPress(e) {
    if (e.which === 13) {
      console.log(this.state.username, this.state.password);
      this.reset();
    }
  }

  reset () {
    this.setState({
      username: '',
      password: ''
    });
  }


  render() {
    return (
      <div className='usr-pss'>
        <div>
          username: <input type='username' value={this.state.username} onChange={this.onUserChange} onKeyPress={this.onUserKeyPress} placeholder='username'/>
        </div>
        <div>
          password: <input type='password' value={this.state.password} onChange={this.onPassChange} onKeyPress={this.onPassKeyPress} placeholder='password'/>
        </div>
        <button className='submit' onClick={()=> { console.log(this.state.username, this.state.password); this.reset(); }}>submit</button>
      </div>
    )
  }
}


export default Login