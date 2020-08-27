import React, { Component } from 'react';
import Topbar from './Topbar';
import './Board.css';


class Board extends Component {
    render() {
        return (
            <div className="Board">
                <Topbar page="Board"/>

                <div className="KanbannerBoard">
                    <div className="column">
                        <h2><span role="img" aria-label="unsure">🥴</span> To Do <span role="img" aria-label="unsure">🥴</span></h2>
                    </div>
                    <div className="column">
                        <h2><span role="img" aria-label="ready">🤓</span> Doing <span role="img" aria-label="ready">🤓</span></h2>
                    </div>
                    <div className="column">
                        <h2><span role="img" aria-label="hurray">🎉</span> Done <span role="img" aria-label="hurray">🎉</span></h2>
                    </div>
                </div>
            </div>
        )
    }
}


export default Board;