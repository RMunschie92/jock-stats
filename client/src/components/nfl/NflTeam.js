import React, { Component } from "react";
import nflTeamList from "../../data/nflData";

class NflTeam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      data: "",
      roster: "",
      standings: "",
      stats: "",
      currentTeam: "",
      venue: ""
    }
  }

  componentDidMount() {
    let teamId = this.props.match.params.id;
    fetch(`/api/nfl/team/${teamId}`)
      .then(res => res.json())
      .then(result => {
        this.setState({
          data: result,
          roster: result.rawRosterData,
          standings: result.teamStandings,
          stats: result.teamStats
        }); 
        console.log(this.state.data)// DATA LOG)
      }, error => {
        this.setState({ isLoaded: true, error });
      });
    for (let i = 0; i < nflTeamList.length; i++) {
      if (nflTeamList[i].id === parseInt(teamId, 10)) {
        this.setState({
          currentTeam: nflTeamList[i],
          venue: nflTeamList[i].homeVenue
        });
      }
    }
  }

  render() {
    let team = this.state.currentTeam;
    let venue = this.state.venue;
    return (
      <div>
        <h1>Nhl Team component</h1>
        <p>{team.city} {team.name}</p>
        <p>Established: {team.established}</p>
        <p>Home Venue: {venue.name}</p>
      </div>
    );
  }
}

export default NflTeam;