import React, { Component } from 'react';
import fire from './config/fire';
import CreateTaskSidebar from './CreateTaskSidebar';
import Topbar from './Topbar';
import './Board.css';
const database = fire.database();


class Board extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false,
            tasks: [],
            newTaskName: "",
            newTaskDescription: ""
        }
        this.handleSidebarChange = this.handleSidebarChange.bind(this);
        this.handleNewTaskNameChange = this.handleNewTaskNameChange.bind(this);
        this.handleNewTaskDescriptionChange = this.handleNewTaskDescriptionChange.bind(this);
        this.handleSubmitTask = this.handleSubmitTask.bind(this);
        this.handleClearBoard = this.handleClearBoard.bind(this);
    }

    async componentDidMount() {
        this._isMounted = true;

        if (this.props.userId) {
            let dbTasks = await database.ref('/users/' + this.props.userId).once('value')
                .then((snapshot) => {
                    return (snapshot.val() && snapshot.val().tasks) || [];
                })

            if (this._isMounted) {
                this.setState({
                    tasks: dbTasks
                });
            }
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    writeUserTasksToDB() {
        database.ref('/users/' + this.props.userId).set({
            tasks: this.state.tasks
        });
    }

    handleSidebarChange() {
        this.setState({ sidebarOpen: !this.state.sidebarOpen });
    }

    handleNewTaskNameChange(name) {
        this.setState({ newTaskName: name });
    }

    handleNewTaskDescriptionChange(description) {
        this.setState({ newTaskDescription: description });
    }

    handleSubmitTask() {
        if (this.state.newTaskName) {
            this.setState({
                tasks: this.state.tasks.concat({
                    name: this.state.newTaskName,
                    description: this.state.newTaskDescription,
                    category: "toDo"
                }),
                newTaskName: "",
                newTaskDescription: ""
            }, this.writeUserTasksToDB);
            this.handleSidebarChange();
        }
    }

    handleClearBoard() {
        this.setState({ tasks: [] }, this.writeUserTasksToDB);
    }

    onDragStart = (ev, id) => {
        console.log("dragstart:", id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
        console.log(cat);
        let id = ev.dataTransfer.getData("id");
        let tasks = this.state.tasks.filter((t) => {
            if (t.name + "\n" + t.description === id) {
                t.category = cat;
            }
            return t;
        });
        this.setState({ ...this.state, tasks }, this.writeUserTasksToDB);
    }

    formatTasks(arr) {
        this.state.tasks.forEach((t) => {
            arr[t.category].push(
                <div className="Task"
                    key={t.name + "\n" + t.description}
                    onDragStart={(e) => this.onDragStart(e, t.name + "\n" + t.description)}
                    draggable="true">
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
                <CreateTaskSidebar
                    newTaskName={this.state.newTaskName}
                    newTaskDescription={this.state.newTaskDescription}
                    onNewTaskNameChange={this.handleNewTaskNameChange}
                    onNewTaskDescriptionChange={this.handleNewTaskDescriptionChange}
                    onSubmitTask={this.handleSubmitTask}
                    sidebarOpen={this.state.sidebarOpen}
                    onToggledSidebar={this.handleSidebarChange} />

                <Topbar page="Board" onCreateTask={this.handleSidebarChange} onClearBoard={this.handleClearBoard} />

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