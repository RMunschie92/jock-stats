import React, { Component } from 'react';
import { Link } from "react-router-dom";

class RosterForwards extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const players = this.props.players;

        if (players) {    
            this.players = this.props.players.map((player, index) => (
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
                <h2>Forwards</h2>
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
                        {this.players}   
                    </tbody>
                </table>
            </div>
        )
    }
}

export default RosterForwards;