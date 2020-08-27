import React, { Component } from 'react';
import Topbar from './Topbar';
import LoginSidebar from './LoginSidebar';
import './Home.css';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        }
        this.handleSidebarChange = this.handleSidebarChange.bind(this);
    }

    handleSidebarChange() {
        this.setState({ sidebarOpen: !this.state.sidebarOpen });
    }

    render() {
        return (
            <div className="Home">
                <LoginSidebar sidebarOpen={this.state.sidebarOpen}
                    onToggledSidebar={this.handleSidebarChange} />
                <Topbar page="Home"
                    onToggledSidebar={this.handleSidebarChange} />

                <div className="Main">
                    <div className="Jumbotron">
                        <h1 className="KanbannerTitle">kanbanner</h1>
                        <p>a solo planner</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;