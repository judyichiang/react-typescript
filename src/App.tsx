import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./message";

class App extends Component<any> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Message name="User" message="This is a simple message" />
        </header>
      </div>
    );
  }
}

export default App;
