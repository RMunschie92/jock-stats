import React, { Component } from "react";
import { Conference } from '../common';
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
          }, console.log(result.conferences));
        }, error => {
          this.setState({ isLoaded: true, error });
        });
  }

  render() {

    this.conferencesList = this.state.conferences.map((conference, index) => (
      <Conference key={index} conference={conference} />
    ))

    return (
      <div>
        <p>Welcome to Jock Stats NHL</p>

        {this.conferencesList}

      </div>
    ); 
  }
}

export default NhlHome;