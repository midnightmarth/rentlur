import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  changeState(cred) {
    this.setState({

    })
  }

  onChange(e) {
    console.log(e.target.value);
  }


  render() {
    return (
      <div>
        username: <input value={this.state.username} onChange={this.onChange} onKeyPress={this.onKeyPress}/>
        password: <input value={this.state.password} onChange={this.onChange} onKeyPress={this.onKeyPress}/>
        <button onClick={()=> console.log(this.state.username, this.state.password)}>submit</button>
      </div>
    )
  }
}