import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import fire from './config/fire';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Home from './Home';
import Board from './Board';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      sidebarOpen: false
    }
    this.handleSidebarChange = this.handleSidebarChange.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  handleSidebarChange() {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }

  render() {
    return (
      <Router>
        <Route exact path={"/"} component={() =>
          this.state.user
            ?
            <div className="Page">
              <Topbar page="Board"
                onOpenSidebar={this.handleSidebarChange} />
              <Board />
            </div>
            :
            <div className="Page">
              <Sidebar sidebarOpen={this.state.sidebarOpen}
                onOpenSidebar={this.handleSidebarChange} />
              <Topbar page="Home"
                onOpenSidebar={this.handleSidebarChange} />
              <Home />
            </div>
        } />
      </Router >
    );
  }
}


export default App;