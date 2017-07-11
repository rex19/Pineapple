import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


/*
import './docs/assets/css/bootstrap.css';
import './docs/assets/css/docs.css';
*/

class App extends Component {

  componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps",nextProps);

  }
  render() {
    return (
      <div className="App">
        <Nav test="tets" />

        {this.props.children}
      </div>
    );
  }
}

export default App;
{/*<div className="App-header">
 <img src={logo} className="App-logo" alt="logo" />
 <h2>Welcome to React</h2>
 </div>*/}