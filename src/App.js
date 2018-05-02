import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ToDosContainer from './containers/ToDosContainer';
import Header from './components/Header';
import MyRoutes from './config/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          { MyRoutes }
      </div>
    );
  }
}

export default App;
