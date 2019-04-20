import React, {Component} from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Us from "./Us";
import ErrorPage from "./ErrorPage";
import  productData from '../components/data/productData'
import Products from "./Products";
import Header from "./Header";

class Router extends Component{

    state = {
        products: []
    };

    componentWillMount() {
        this.setState({
            products: productData
        })
    }


    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/" render={() => (
                        <Products
                            products={this.state.products}
                        />
                    )}/>
                    <Route exact path="/us" component={Us}/>
                    <Route component={ErrorPage}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;