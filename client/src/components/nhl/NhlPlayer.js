import React, { Component } from "react";
import Player from '../common/Player';
import NhlPlayerSnapshot from './NhlPlayerSnapshot';
import NhlPlayerStats from './NhlPlayerStats';
import '../../styles/common/playerSnapshot.css';

class NhlPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
      isLoaded: false,
      error: null
    }
  }

  componentDidMount() {
    let playerId = this.props.match.params.id;
    fetch(`/api/nhl/player/${playerId}`)
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          data: result,
          player: result.playerData,
          stats: result.playerStats,
          teamData: result.teamData,
          teamName: result.teamName
        });
        console.log(this.state.data); // DATA LOG
      }, error => {
        this.setState({ isLoaded: true, error });
      });
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <h6>Loading...</h6>
      );
    } 
    else {
      const player = this.state.player;
      const stats = this.state.stats;
      const teamData = this.state.teamData;
      const playerImage = player.officialImageSrc ? player.officialImageSrc : 'https://res.cloudinary.com/munsch-creative/image/upload/v1549758569/AnonymousProfile_Icon_sqff2m.png';

      return (
        <div>
          <h1>Nhl Player component</h1>
          <NhlPlayerSnapshot player={this.state.player} playerImage={playerImage} teamName={this.state.teamName}/>
          <NhlPlayerStats stats={stats}/>
        </div>
      );
    }
  }
}

export default NhlPlayer;