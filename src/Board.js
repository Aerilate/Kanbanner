import React, { Component } from 'react';
import Topbar from './Topbar';
import './Board.css';


class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                { name: "Learn Angular", description: "yes", category: "toDo" },
                { name: "Learn Angular2", description: "yes", category: "doing" },
                { name: "Learn Angular3", description: "yes", category: "done" }
            ]
        }
        this.handleCreateTask = this.handleCreateTask.bind(this);
        this.handleClearBoard = this.handleClearBoard.bind(this);
    }

    handleCreateTask() {
        this.setState({ tasks: this.state.tasks.concat({ name: "Learn Vue", description: "yes", category: "toDo" }) });
    }

    handleClearBoard() {
        this.setState({ tasks: [] });
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
        console.log(cat);
        let id = ev.dataTransfer.getData("id");
        let tasks = this.state.tasks.filter((task) => {
            if (task.name === id) {
                task.category = cat;
            }
            return task;
        });
        this.setState({ ...this.state, tasks });
    }

    onDragStart = (ev, id) => {
        console.log("dragstart:", id);
        ev.dataTransfer.setData("id", id);
    }

    formatTasks(arr) {
        this.state.tasks.forEach((t) => {
            arr[t.category].push(
                <div className="Task" onDragStart={(e) => this.onDragStart(e, t.name)} draggable="true">
                    <h3>{t.name}</h3>
                    <p>{t.description}</p>
                </div>)
        });
    }

    render() {
        let displayTasks = {
            toDo: [],
            doing: [],
            done: []
        }
        this.formatTasks(displayTasks);

        return (
            <div className="Board" >
                <Topbar page="Board" onCreateTask={this.handleCreateTask} onClearBoard={this.handleClearBoard} />

                <div className="KanbannerBoard">
                    <div className="Column" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e, "toDo")}>
                        <h2><span role="img" aria-label="unsure">🥴</span> To Do <span role="img" aria-label="unsure">🥴</span></h2>
                        {displayTasks.toDo}
                    </div>

                    <div className="Column" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e, "doing")}>
                        <h2><span role="img" aria-label="ready">🤓</span> Doing <span role="img" aria-label="ready">🤓</span></h2>
                        {displayTasks.doing}
                    </div>

                    <div className="Column" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e, "done")}>
                        <h2><span role="img" aria-label="hurray">🎉</span> Done <span role="img" aria-label="hurray">🎉</span></h2>
                        {displayTasks.done}
                    </div>
                </div>
            </div>
        )
    }
}


export default Board;