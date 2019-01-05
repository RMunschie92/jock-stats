import React, { Component } from 'react';
import { Division } from '../common';
import '../../styles/common/conference.css';

class Conference extends Component {
    render() {
        const divisions = this.props.conference.divisions;

        this.divisionContainer = divisions.map((division, index) => (
            <Division key={index} name={division.name} teams={division.teams} />
        ));

        return (
            <div class="conference">
                <h3 className="conferenceName">{this.props.conference.name}</h3>
                <div className="conferenceList">
                    {this.divisionContainer}
                </div>
            </div>
        )
    }
}

export default Conference;