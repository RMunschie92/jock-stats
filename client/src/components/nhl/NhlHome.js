import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../styles/nhl/nhlHome.css';

class NhlHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      metro: [],
      atlantic: [],
      central: [],
      pacific: []
    }
  };

  componentDidMount() {
    fetch('/api/nhl/teams')
      .then(res => res.json())
      .then(result => {
          this.setState({
            metro: result.metroDiv,
            atlantic: result.atlanticDiv,
            central: result.centralDiv,
            pacific: result.pacificDiv
          });
        }, error => {
          this.setState({ isLoaded: true, error });
        });
  }

  render() {
    this.metroList = this.state.metro.map((team, index) => (
      <li className="teamCell" key={index}>
        <Link
          className="cardLink"
          to={{
            pathname: `/nhl/team/${team.id}`,
            state: { team }
          }}
        >
          <p>{team.city} {team.name}</p>
        </Link>
      </li>
    )); 

    this.atlanticList = this.state.atlantic.map((team, index) => (
      <li className="teamCell" key={index}>
        <Link
          className="cardLink"
          to={{
            pathname: `/nhl/team/${team.id}`,
            state: { team }
          }}
          >
          <p>{team.city} {team.name}</p>
        </Link>
      </li>
    )); 

    this.centralList = this.state.central.map((team, index) => (
      <li className="teamCell" key={index}>
        <Link
          className="cardLink"
          to={{
            pathname: `/nhl/team/${team.id}`,
            state: { team }
          }}
          >
          <p>{team.city} {team.name}</p>
        </Link>
      </li>
    )); 

    this.pacificList = this.state.pacific.map((team, index) => (
      <li className="teamCell" key={index}>
        <Link
          className="cardLink"
          to={{
            pathname: `/nhl/team/${team.id}`,
            state: { team }
          }}
          >
          <p>{team.city} {team.name}</p>
        </Link>
      </li>
    )); 

    return <div>
        <p>Welcome to Jock Stats NHL</p>

        <h3>Eastern Conference</h3>
        <div className="nhlEasternConference">
          <div className="division">
            <h4>Metropolitan Division</h4>
            <ul>{this.metroList}</ul>
          </div>

          <div className="division">
            <h4>Atlantic Division</h4>
            <ul>{this.atlanticList}</ul>
          </div>
        </div>

        <h3>Western Conference</h3>
        <div className="nhlWesternConference">
          <div className="division">
            <h4>Central Division</h4>
            <ul>{this.centralList}</ul>
          </div>

          <div className="division">
            <h4>Pacific Division</h4>
            <ul>{this.pacificList}</ul>
          </div>
        </div>
      </div>; 
  }
}

export default NhlHome;