import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import TodosContainer from './container/TodosContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> HELLO WORLD </h1>
      </div>
    );
  }
}

export default App;
