import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/layout.css';

class Navbar extends Component {
  render() {
    return (
      <div className="NavbarComponent">
        <nav className="navbar">
          <Link to="/mlb/home">MLB</Link>
          <Link to="/nba/home">NBA</Link>
          <Link to="/nhl/home">NHL</Link>
          <Link to="/nfl/home">NFL</Link>          
        </nav>
      </div>
    )
  }
}

export default Navbar;