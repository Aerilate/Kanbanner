import React, { Component } from 'react';
import ReactSidebar from "react-sidebar";
import './CreateTaskSidebar.css';

class CreateTaskSidebar extends Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.submitTask = this.submitTask.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    handleNameChange(e) {
       this.props.onNewTaskNameChange(e.target.value);
    }

    handleDescriptionChange(e) {
        this.props.onNewTaskDescriptionChange(e.target.value);
    }

    submitTask() {
        this.props.onSubmitTask();
    }

    toggleSidebar() {
        this.props.onToggledSidebar();
    }

    render() {
        const taskName = this.props.newTaskName;
        const taskDescription = this.props.newTaskDescription;

        return (
            <ReactSidebar
                sidebar={
                    <div className="Sidebar">
                        <h3 className="CloseButton" onClick={this.toggleSidebar}>close (x)</h3>
                        <h1 className="SidebarTitle">CreateTask</h1>
                        <form>
                            <input
                                type="text"
                                name="taskName"
                                placeholder="task name (required)"
                                value={taskName}
                                onChange={this.handleNameChange}
                            />
                            <input
                                type="text"
                                name="taskDescription"
                                placeholder="description" 
                                value={taskDescription}
                                onChange={this.handleDescriptionChange}
                            />
                            <h2 className="CreateTaskButton" onClick={this.submitTask}>done</h2>
                        </form>
                    </div>}
                pullLeft={true}
                open={this.props.sidebarOpen}
                styles={{
                    sidebar:
                    {
                        background: "#333333",
                        color: "white"
                    }
                }}>
            </ReactSidebar >
        );
    }
}


export default CreateTaskSidebar;