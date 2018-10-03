import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/layout.css';

class Navbar extends Component {
  render() {
    return (
      <div className="NavbarComponent">
        <nav className="navbar">
          <Link to="/api/mlb/home">MLB</Link>
          <Link to="/api/nba/home">NBA</Link>
          <Link to="/api/nhl/home">NHL</Link>
          <Link to="/api/nfl/home">NFL</Link>          
        </nav>
      </div>
    )
  }
}

export default Navbar;