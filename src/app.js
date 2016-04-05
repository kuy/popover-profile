import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class App extends Component {
  static get displayName() {
    return 'App';
  }

  render() {
    return <h1>Popover Profile</h1>;
  }
}

function select(state) {
  const { app } = state;
  return { app };
}

export default connect(select)(App);
