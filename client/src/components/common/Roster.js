import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Roster extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            isLoaded: false,
            data: "",
            roster: "",
            standings: "",
            stats: "",
        }
    }

    componentDidMount() {
        let teamId = this.props.teamId;
        fetch(`/api/nhl/team/${teamId}`)
          .then(res => res.json())
          .then(result => {
            this.setState({
              data: result,
              roster: result.rawRosterData,
              standings: result.teamStandings,
              stats: result.teamStats
            });
            console.log(this.state.data); // DATA LOG
          }, error => {
            this.setState({ isLoaded: true, error });
          });
    }

    render() {
        const roster = this.state.roster;

        if (this.state.roster.length > 0) {
            this.roster = roster.map((player, index) => (
                <li className="playerCell" key={index}>
                    <Link
                        className="cardLink"
                        to={{
                            pathname: `/nhl/player/${player.id}`,
                            state: { player }
                        }}
                        >
                        <p>{player.firstName} {player.lastName}</p>
                    </Link>
                </li>
            ))
        }
       
        return (
            <div>
                <h4>Roster Component</h4>
                <ul className="rosterList">
                    {this.roster}
                </ul>
            </div>
        )
    }
}

export default Roster;