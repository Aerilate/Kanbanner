import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
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
            <div id="Home">
                <LoginSidebar sidebarOpen={this.state.sidebarOpen}
                    onToggledSidebar={this.handleSidebarChange} />
                <Topbar page="Home"
                    onToggledSidebar={this.handleSidebarChange} />

                <div className="Main">
                    <div className="Jumbotron">
                        <Fade left>
                            <h1 className="KanbannerTitle">kanbanner</h1>
                            <p>a solo planner</p>
                        </Fade>
                    </div>
                </div>

                <div id="Lower">
                    <Fade right>
                        <img src={require('./res/KanbannerBoard.png')} alt="the Kanbanner board" />
                        <p>the simple three column Kanbanner board allows <br /> you to keep track of your tasks</p>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default Home;