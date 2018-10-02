import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state= {
    data: null
  };

  componentDidMount() {
    this.fetchData() 
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  fetchData = async () => {
    const response = await fetch('/api/home');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;
