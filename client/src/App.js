import React, { Component } from 'react';
import Toolbar from './Components/ToolBar/Toolbar'
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
      <Toolbar />
      </div>
    );
  }
}

export default App;
