import React, { Component } from 'react';
import '../../styles/nhl/roster.css';
import { RosterDefense, RosterForwards, RosterGoalies } from './roster/index';

class Roster extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            isLoaded: false,
            data: "",
            roster: "",
            standings: "",
            stats: "",
        }
    }

    componentDidMount() {
        let teamId = this.props.teamId;
        fetch(`/api/nhl/team/${teamId}`)
          .then(res => res.json())
          .then(result => {
            this.setState({
              isLoaded: true,
              data: result,
              defense: result.defense,
              forwards: result.forwards,
              goalies: result.goalies,
              standings: result.teamStandings,
              stats: result.teamStats
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
            return (
                <div className="roster">
                    <RosterForwards players={this.state.forwards}/>
                    <RosterDefense players={this.state.defense}/>
                    <RosterGoalies players={this.state.goalies}/>
                </div>
            )
        }
    }
}

export default Roster;