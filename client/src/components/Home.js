import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
    this.state = { leagues: [] }
  }

  componentDidMount() {
    fetch('/') 
      .then(res => {
        console.log(res);
        return res.json()
      })
      .then(leagues => {
        console.log(leagues);
        this.setState({ leagues })
      });
  }
  render() {
    console.log(this.state);
    return(
      <div>
        <h1>Welcome to Jock Stat Home</h1>
        {this.state.leagues.map(league => 
          <div key={league.id}>{league.leageName}</div>  
        )}
      </div>
    );
  }
}

export default Home;