import React, { Component } from "react";
import { Router, Switch, Route, Redirect} from "react-router-dom";

import words from "./Components/Words/words"
import history from './history';
import home from './Components/Home/home'
import photos from './Components/Photos/Photos'



export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path='/'><Redirect to='/home'></Redirect></Route>
                    <Route exact path='/#'><Redirect to='/home'></Redirect></Route>
                    <Route exact path='/home' component ={home}/>
                    <Route exact path="/words" component={words} />
                    <Route exact path="/sights" component={photos} />
                </Switch>
            </Router>
        )
    }
}