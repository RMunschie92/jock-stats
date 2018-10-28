import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import { MlbHome, MlbTeam, MlbPlayer } from "./components/mlb";
import { NbaHome, NbaTeam, NbaPlayer } from "./components/nba";
import { NflHome, NflTeam, NflPlayer } from './components/nfl';
import { NhlHome, NhlTeam, NhlPlayer } from './components/nhl';
// import Footer from './components/layout/Footer';
import Home from './components/Home';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/mlb/home" component={MlbHome} />
            <Route exact path="/mlb/team" component={MlbTeam} />
            <Route exact path="/mlb/player" component={MlbPlayer} />
          <Route exact path="/nba/home" component={NbaHome} />
            <Route exact path="/nba/team" component={NbaTeam} />
            <Route exact path="/nba/player" component={NbaPlayer} />
          <Route exact path="/nfl/home" component={NflHome} />
            <Route exact path="/nfl/team" component={NflTeam} />
            <Route exact path="/nfl/player" component={NflPlayer} />
          <Route exact path="/nhl/home" component={NhlHome} />
            <Route exact path="/nhl/team/:id" component={NhlTeam} />
            <Route exact path="/nhl/player" component={NhlPlayer} />
        </div>
      </Router>
      
    );
  }
}

export default App;