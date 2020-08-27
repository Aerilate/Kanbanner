import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import fire from './config/fire';
import Home from './Home';
import Board from './Board';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
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

  render() {
    return (
      <Router>
        <Route exact path={"/"} component={() =>
          <div className="Page">
            {this.state.user ? <Board /> : <Home />}
          </div>} />
      </Router >
    );
  }
}


export default App;