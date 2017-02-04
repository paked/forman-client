import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <RaisedButton label="default" />
      </MuiThemeProvider>
    );
  }
}

export default App;
