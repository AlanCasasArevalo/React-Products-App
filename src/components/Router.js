import React, {Component} from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Init from "./Init";
import Us from "./Us";
import ErrorPage from "./ErrorPage";

class Router extends Component{
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Init}/>
                    <Route exact path="/us" component={Us}/>
                    <Route component={ErrorPage}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;