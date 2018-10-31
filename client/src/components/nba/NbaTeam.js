import React, { Component } from "react";

class NbaTeam extends Component {
  constructor() {
    super();
    
    this.state = {
      error: null,
      isLoaded: false,
      data: "",
      roster: "",
      standings: "",
      stats: "",
      currentTeam: "",
      venue: ""
    };
  }

  componentDidMount() {
    fetch("/api/nba/team")
      .then(res => res.json())
      .then(result => {
          console.log(result);
        }, error => {
          this.setState({ isLoaded: true, error });
        });
  }

  render() {
    return (
      <div>
        <p>This is the NbaTeam component</p>
      </div>
    );
  }
}

export default NbaTeam;
