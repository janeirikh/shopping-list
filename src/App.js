import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h2><Link to="/">Handleliste</Link></h2>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
