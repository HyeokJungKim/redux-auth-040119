import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchToBackendTheLoginInformation} from '../Redux/index'

class LoginForm extends Component {

  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const loginInformation = this.state
    this.props.fetchToBackendTheLoginInformation(loginInformation)
    this.props.history.push("/profile")
  }

  render() {
    const {username, password} = this.state
    return (
      <div>
        <h3>LOGIN</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" value={username} onChange={this.handleChange}/>
          </label>
          <label>
            Password:
            <input type="password" name="password" value={password} onChange={this.handleChange}/>
          </label>
          <input type="submit"/>
        </form>
      </div>
    );
  }

}

export default connect(null, {fetchToBackendTheLoginInformation})(LoginForm);
















//
