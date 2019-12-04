import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Board from './Board';
import './App.css';

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <div className="App">
            <Board />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
