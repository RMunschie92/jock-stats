import React, { Component } from 'react';
import Roster from './Roster';
import nhlTeamList from "../../data/nhlData"

class Team extends Component {
    constructor(props) {
        super(props)

        this.state = {
            team: '',
            venue: ''
        }
    }

    componentDidMount() {
        let teamId = this.props.teamId;

        for (let i = 0; i < nhlTeamList.length; i++) {
            if (nhlTeamList[i].id === parseInt(teamId, 10)) {
              this.setState({ 
                team: nhlTeamList[i],
                venue: nhlTeamList[i].homeVenue 
              });
            }
        }
    }

    render() {
        let team = this.state.team;
        let venue = this.state.venue;

        return (
            <div>
                <h3>Team Component</h3>
                <p>{team.city} {team.name}</p>
                <p>Established: {team.established}</p>
                <p>Home Venue: {venue.name}</p>
                <Roster teamId={this.props.teamId}/>
            </div>
        )
    }
}

export default Team;