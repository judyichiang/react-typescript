import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './message'

class App extends Component <any> {


  //b/c using class Component , it comes with life cycles
  //will run as your component will mount
  componentWillMount(){
    console.log('Almost there ..')
  }

  //func runs after mounted
  componentDidMount(){
    console.log('Finally...hello')
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Message message = 'This is a simple message'/>


        </header>
      </div>
    );
  }

}

export default App;
