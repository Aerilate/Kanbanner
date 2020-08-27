import React, { Component } from 'react';
import ReactSidebar from "react-sidebar";
import fire from './config/fire';
import './Sidebar.css';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.signup = this.signup.bind(this);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.openLoginSidebar = this.openLoginSidebar.bind(this);
    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err);
        })
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err);
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    openLoginSidebar() {
        this.props.onOpenSidebar();
    }

    render() {
        return (
            <ReactSidebar
                sidebar={
                    <div className="Sidebar">
                        <h3 className="CloseButton" onClick={this.openLoginSidebar}>close (x)</h3>
                        <h1 className="SidebarTitle">Signup / Login</h1>
                        <form>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="email"
                                onChange={this.handleChange}
                                value={this.state.email}

                            />
                            <input
                                name="password"
                                type="password"
                                id="password"
                                placeholder="password"
                                onChange={this.handleChange}
                                value={this.state.password}
                            />
                            <div className="SignupLoginButtons">
                                <h2 className="SignupButton" onClick={this.signup}>Signup</h2>
                                <h2 className="LoginButton" onClick={this.login}>Login</h2>
                            </div>
                        </form>
                    </div>}
                pullRight={true}
                open={this.props.sidebarOpen}
                styles={{
                    sidebar:
                    {
                        background: "#333333",
                        color: "white",
                    }
                }}>
            </ReactSidebar >
        );
    }
}


export default Sidebar;