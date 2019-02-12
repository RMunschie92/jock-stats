import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/layout/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="NavbarComponent">
        <Link to="/" className="homeLink">Jock Stats</Link>
        <nav className="navbar">
          <Link to="/mlb/home" className="navbarLink">MLB</Link>
          <Link to="/nba/home" className="navbarLink">NBA</Link>
          <Link to="/nhl/home" className="navbarLink">NHL</Link>
          <Link to="/nfl/home" className="navbarLink">NFL</Link>          
        </nav>
      </div>
    )
  }
}

export default Navbar;