import React, { Component } from "react";

class MlbHome extends Component {
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
    fetch('/api/mlb/home')
      .then(res => res.json())
      .then(result => {
        console.log(result);
      },
        error => {
          this.setState({ isLoaded: true, error });
        });
  }

  render() {
    return (
      <div>
        <p>This is the MlbHome component</p>
      </div>
    );
  }
}

export default MlbHome;
