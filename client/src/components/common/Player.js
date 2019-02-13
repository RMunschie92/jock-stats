import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Team from '../common/Team';
import '../../styles/common/team.css';

class Player extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            error: null,
            isLoaded: false,
            data: "",
            stats: ""
        }
    }

    componentDidMount() {
        let playerId = this.props.playerId;
    }

    render() {
        return (
            <div>
                <h2>Player Component</h2>
                <p>Hello</p>
            </div>
        )
    }
}

export default Player;