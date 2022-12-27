import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Display } from './components/Display';
// import Data from './data/data'
import dataStore from "./store/store"

export default class App extends Component {
  render() {
    return (
      <Provider store={dataStore}>
        {/* <Data /> */}
        <Display name="Names" />
      </Provider>
    );
  }
}
