import React, {Component} from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Init from "./Init";

class Router extends Component{
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Init}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;