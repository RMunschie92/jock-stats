import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';

import MlbHome from './components/mlb/MlbHome';

import NbaHome from './components/nba/NbaHome';
import NbaPlayer from './components/nba/NbaPlayer';
import NbaTeam from './components/nba/NbaTeam';

import NflHome from "./components/nfl/NflHome";

import NhlHome from "./components/nhl/NhlHome";

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
            <Route exact path="/api/nba/team" component={NbaTeam} />
            <Route exact path="/api/nba/player" component={NbaPlayer} />
          <Route exact path="/api/nfl/home" component={NflHome} />
          <Route exact path="/api/nhl/home" component={NhlHome} />
          <Footer />
        </div>
      </Router>
      
    );
  }
}

export default App;
