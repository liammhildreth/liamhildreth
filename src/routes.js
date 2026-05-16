import React, { Component } from "react";
import { Router, Switch, Route, Redirect} from "react-router-dom";

import history from './history';
import Home from './Components/Home/Home'



export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component ={Home}/>
                </Switch>
            </Router>
        )
    }
}