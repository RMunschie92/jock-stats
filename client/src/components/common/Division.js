import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../styles/common/division.css';

class Division extends Component {
    render() {
        const teams = this.props.teams
        this.teamList = teams.map((team, index) => (
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

        return (
            <div className="divisionContainer">
                <h4>{this.props.name}</h4>
                <ul className="divisionTeamList">
                    {this.teamList}
                </ul>
            </div>
        )
    }
}

export default Division;