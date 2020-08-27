import React, { Component } from 'react';
import fire from './config/fire';
import './Topbar.css';
import { Link } from 'react-router-dom';


class Topbar extends Component {
    constructor(props) {
        super(props);
        this.openLoginSidebar = this.openLoginSidebar.bind(this);
        this.createTask = this.createTask.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    openLoginSidebar() {
        this.props.onOpenSidebar();
    }

    createTask() {
    }

    handleLogout() {
        fire.auth().signOut();
        this.props.onOpenSidebar();
    }

    render() {
        return (
            <div className="Topbar">
                <nav>
                    <ul>
                        <li class="Title"><h2>kanbanner</h2></li>

                        {this.props.page === "Home" &&
                            <li class="Login" onClick={this.openLoginSidebar}><h2>signup / login</h2></li>}

                        {this.props.page === "Board" &&
                            <div>
                                <li class="CreateTask" onClick={this.createTask}><h2>create task</h2></li>
                                <li class="Logout" onClick={this.handleLogout}><h2>logout</h2></li>
                            </div>}
                    </ul>
                </nav>
            </div>
        )
    }
}


export default Topbar;