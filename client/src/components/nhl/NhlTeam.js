import React, { Component } from "react";
import Team from '../common/Team';
import '../../styles/common/team.css';

class NhlTeam extends Component {

  render() {
    return (
      <div className="team">
        <h1>Nhl Team component</h1>
        <Team teamId={this.props.match.params.id}/>
      </div>
    );
  }
}

export default NhlTeam;