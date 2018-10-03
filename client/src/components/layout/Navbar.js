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
          <h3>NHL</h3>
          <h3>NFL</h3>
        </nav>
      </div>
    )
  }
}

export default Navbar;