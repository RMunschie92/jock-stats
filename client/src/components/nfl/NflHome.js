import React, { Component } from "react";
import { Link } from 'react-router-dom';

class NflHome extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      afcEast: [],
      afcNorth: [],
      afcSouth: [],
      afcWest: [],
      nfcEast: [],
      nfcNorth: [],
      nfcSouth: [],
      nfcWest: []
    }
  }

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi() {
    fetch("/api/nfl/teams")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            afcEast: result.afcEast,
            afcNorth: result.afcNorth,
            afcWest: result.afcWest,
            afcSouth: result.afcSouth,
            nfcEast: result.nfcEast,
            nfcNorth: result.nfcNorth,
            nfcWest: result.nfcWest,
            nfcSouth: result.nfcSouth
          });
        },
        error => {
          this.setState({ isLoaded: true, error });
        }
      );
  }

  render() {

    this.afcEastList = this.state.afcEast.map((team, index) => 
      <li className="teamCell" key={index}>
        <Link
          className="cardLink"
          to={{
            pathname: `/nfl/team/${team.id}`,
            state: { team }
          }}
        >
          <p>{team.city} {team.name}</p>
        </Link>
      </li>
    );

    this.afcNorthList = this.state.afcNorth.map((team, index) =>
      <li className="teamCell" key={index}>
        <Link
          className="cardLink"
          to={{
            pathname: `/nfl/team/${team.id}`,
            state: { team }
          }}
        >
          <p>{team.city} {team.name}</p>
        </Link>
      </li>
    );

    this.afcSouthList = this.state.afcSouth.map((team, index) => (
      <li className="teamCell" key={index}>
        <Link
          className="cardLink"
          to={{
            pathname: `/nfl/team/${team.id}`,
            state: { team }
          }}
        >
          <p>
            {team.city} {team.name}
          </p>
        </Link>
      </li>
    ));

    this.afcWestList = this.state.afcWest.map((team, index) => (
      <li className="teamCell" key={index}>
        <Link
          className="cardLink"
          to={{
            pathname: `/nfl/team/${team.id}`,
            state: { team }
          }}
        >
          <p>
            {team.city} {team.name}
          </p>
        </Link>
      </li>
    ));

    this.nfcEastList = this.state.nfcEast.map((team, index) =>
      <li className="teamCell" key={index}>
        <Link
          className="cardLink"
          to={{
            pathname: `/nfl/team/${team.id}`,
            state: { team }
          }}
        >
          <p>{team.city} {team.name}</p>
        </Link>
      </li>
    );

    this.nfcNorthList = this.state.nfcNorth.map((team, index) =>
      <li className="teamCell" key={index}>
        <Link
          className="cardLink"
          to={{
            pathname: `/nfl/team/${team.id}`,
            state: { team }
          }}
        >
          <p>{team.city} {team.name}</p>
        </Link>
      </li>
    );

    this.nfcSouthList = this.state.nfcSouth.map((team, index) => (
      <li className="teamCell" key={index}>
        <Link
          className="cardLink"
          to={{
            pathname: `/nfl/team/${team.id}`,
            state: { team }
          }}
        >
          <p>
            {team.city} {team.name}
          </p>
        </Link>
      </li>
    ));

    this.nfcWestList = this.state.nfcWest.map((team, index) => (
      <li className="teamCell" key={index}>
        <Link
          className="cardLink"
          to={{
            pathname: `/nfl/team/${team.id}`,
            state: { team }
          }}
        >
          <p>
            {team.city} {team.name}
          </p>
        </Link>
      </li>
    ));

    return <div>
        <p>This is the NflHome component</p>
        <div className="afcContainer">
          <h3>American Football Conference</h3>
          <h4>AFC East</h4>
          <ul>{this.afcEastList}</ul>
          <h4>AFC North</h4>
          <ul>{this.afcNorthList}</ul>
          <h4>AFC South</h4>
          <ul>{this.afcSouthList}</ul>
          <h4>AFC West</h4>
          <ul>{this.afcWestList}</ul>
        </div>
        <div className="nfcContainer">
          <h3>National Football Conference</h3>
          <h4>NFC East</h4>
          <ul>{this.nfcEastList}</ul>
          <h4>NFC North</h4>
          <ul>{this.nfcNorthList}</ul>
          <h4>NFC South</h4>
          <ul>{this.nfcSouthList}</ul>
          <h4>NFC West</h4>
          <ul>{this.nfcWestList}</ul>
        </div>
      </div>;
  }
}

export default NflHome;
