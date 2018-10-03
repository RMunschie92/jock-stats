import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import MlbHome from './components/MlbHome';
import NbaHome from './components/NbaHome';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/api/mlb/home" component={MlbHome} />
          <Route exact path="/api/nba/home" component={NbaHome} />
          <Footer />
        </div>
      </Router>
      
    );
  }
}

export default App;
