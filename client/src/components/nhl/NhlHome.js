import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Conference, Division } from '../common';
import '../../styles/nhl/nhlHome.css';
import '../../styles/common/leagueHome.css';

class NhlHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      conferences: []
    }
  };

  componentDidMount() {
    fetch('/api/nhl/teams')
      .then(res => res.json())
      .then(result => {
          this.setState({
            conferences: result.conferences
          });
        }, error => {
          this.setState({ isLoaded: true, error });
        });
  }

  render() {
    return (
      <div>
        <p>Welcome to Jock Stats NHL</p>

        < Conference />
        < Division />

      </div>
    ); 
  }
}

export default NhlHome;