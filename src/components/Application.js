import React, { Component } from 'react';

import FriendListContainer from '../containers/FriendListContainer';
import store from '../store';
import { getAllFriends } from '../actions';

import './Application.css';

class Application extends Component {
  render() {
    return (
      <div className="Application">
        <FriendListContainer />
      </div>
    );
  }

  componentDidMount() {
    store.dispatch(getAllFriends());
  }
}

export default Application;
