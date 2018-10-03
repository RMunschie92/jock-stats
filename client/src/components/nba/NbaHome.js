import React, { Component } from 'react';

class NbaHome extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      error: null
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi() {
    fetch("/api/nba/home")
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
        },
        error => {
          this.setState({ isLoaded: true, error });
        }
      );
  }

  render() {
    return (
      <div>
        <p>This is the NbaHome component</p>
      </div>
    );
  }
}

export default NbaHome;