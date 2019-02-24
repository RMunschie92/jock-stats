import React, { Component } from 'react';

class NhlPlayerSnapShot extends Component {
    render() {
        let { player } = this.props;
        let { playerImage } = this.props;
        let { teamName } = this.props;
        return (
            <div className="playerSnapshot">
                <img className="playerPhoto" src={playerImage} alt={player.firstName + ' ' + player.lastName}/>
                <p>{player.firstName + ' ' + player.lastName} | #{player.jerseyNumber}</p>
                <div className="snapshotInfo">
                    {player.primaryPosition} <span>|</span>
                    {player.height} <span>|</span>
                    {player.weight} lb <span>|</span>
                    Age: {player.age} <span>|</span>
                    {teamName}
                </div>
            </div>
        )
    }
}

export default NhlPlayerSnapShot;