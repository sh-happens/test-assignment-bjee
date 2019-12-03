import React, { Component } from "react";

import { userActions } from "./../actions";

import { connect } from "react-redux";

import { Header } from "./../components";

import { Redirect } from "react-router";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      password: ""
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleValueChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login() {
    const { dispatch } = this.props;
    const { user, password } = this.state;
    dispatch(userActions.login(user, password));
  }

  render() {
    const { username } = this.props;
    const { user, password } = this.state;
    return username ? (
      <Redirect to='/' />
    ) : (
      <div>
        <Header username={username} />
        <form onSubmit={e => e.preventDefault()}>
          <input
            type='text'
            required
            name='user'
            value={user}
            onChange={this.handleValueChange}
            placeholder='Login'
          />
          <input
            type='password'
            required
            name='password'
            value={password}
            onChange={this.handleValueChange}
            placeholder='Password'
          />
          <button type='submit' onClick={this.login}>
            Enter
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { username } = state.user;
  return {
    username
  };
}

const connectedComponent = connect(mapStateToProps, null)(Login);

export { connectedComponent as Login };
