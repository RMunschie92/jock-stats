import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../styles/common/roster.css';

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
                <tr className="playerCell" key={index}>
                    <td className="large playerNameCol">
                        <Link
                            className="playerLink"
                            to={{
                                pathname: `/nhl/player/${player.id}`,
                                state: { player }
                            }}
                        >   
                            
                            <img className="playerSmallPhoto" src={player.officialImageSrc ? player.officialImageSrc : 'https://res.cloudinary.com/munsch-creative/image/upload/v1549758569/AnonymousProfile_Icon_sqff2m.png'} alt="{player.firstName} {player.lastName}"/>
                            <p className="playerName">{player.firstName} {player.lastName}</p>
                        </Link>
                    </td>
                    <td className="small">{player.jerseyNumber}</td>
                    <td className="small">{player.primaryPosition}</td>
                    <td className="small">{player.handedness.shoots}</td>
                    <td className="small">{player.height}</td>
                    <td className="small">{player.weight}</td>
                    <td className="medium">{player.birthDate}</td>
                    <td className="large">{player.birthCity}, {player.birthCountry}</td>
                </tr>
            ))
        }
       
        return (
            <div>
                <h4>Roster Component</h4>
                <table className="rosterTable">
                    <tbody>
                        <tr className="tableHead">
                            <th className="large">Player</th>
                            <th className="small">#</th>
                            <th className="small">Pos</th>
                            <th className="small">Sh</th>
                            <th className="small">Ht</th>
                            <th className="small">Wt</th>
                            <th className="medium">Born</th>
                            <th className="large">Birthplace</th>
                        </tr>
                        {this.roster}   
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Roster;