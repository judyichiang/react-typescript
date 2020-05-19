import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {

    //tuple
    let aTuple: [string, number] = ['Manny', 34, 36]



    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            The value {aTuple[0]} is of {typeof aTuple[0]} type!
        </p>

        </header>
      </div>
    );
  }

}

export default App;
