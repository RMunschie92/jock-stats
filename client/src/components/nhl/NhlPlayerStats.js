import React, { Component } from 'react';

class NhlPlayerStats extends Component {
    render() {
        let { stats } = this.props;
        console.log(stats);

        return (
            <div>
                <p>Nhl player stats</p>
            </div>
        )
    }
}

export default NhlPlayerStats;