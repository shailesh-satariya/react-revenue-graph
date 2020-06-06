import React, {Component} from "react";
import {Route, Redirect, Switch, NavLink} from "react-router-dom";
import './App.css';
import Overview from "./components/overview";
import Campaigns from "./components/campaigns";
import Create from "./components/create";

class App extends Component {
    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Applike Frontend Test</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/overview">Overview</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Campaigns">Campaigns</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/create">Create</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <main className="container">
                    <Switch>
                        <Route path="/overview" component={Overview}/>
                        <Route path="/campaigns" component={Campaigns}/>
                        <Route path="/create" component={Create}/>
                        <Redirect from="/" exact to="/overview"/>
                    </Switch>
                </main>
            </div>
        );
        ;
    }


}

export default App;
