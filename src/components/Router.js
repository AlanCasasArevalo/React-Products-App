import React, {Component} from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Us from "./AboutUs/Us";
import ErrorPage from "./ErrorPage/ErrorPage";
import productData from '../components/data/productData'
import Products from "./Products/Products";
import Header from "./Header/Header";
import ProductDetail from "./Product/ProductDetail";
import Navigation from "./Navigation/Navigation";
import Contact from "./Contact/Contact";

class Router extends Component {

    state = {
        products: [],
        valueSearched: ''
    };

    componentWillMount() {
        this.setState({
            products: productData
        })
    }

    getDataFromForm = valueSearched => {
        if (valueSearched.length > 3) {
            this.setState({
                valueSearched
            })
        } else {
            this.setState({
                valueSearched: ''
            })
        }
    };

    render() {

        let products = [...this.state.products];
        let valueSearched = this.state.valueSearched;
        let result = {};

        if (valueSearched !== '') {
            result = products.filter( product => (
                product.nombre.toLowerCase().indexOf( valueSearched.toLowerCase() ) !== -1
            ))
        } else {
            result = products
        }

        return (
            <BrowserRouter>
                <Header/>
                <Navigation/>
                <Switch>
                    <Route exact path="/" render={() => (
                        <Products
                            products={result}
                            getDataFromForm={this.getDataFromForm}
                        />
                    )}/>
                    <Route exact path="/products/:productId" render={(props) => {
                        let productId = props.location.pathname.replace('/products/', '');
                        return (
                            <ProductDetail
                                productDetail={this.state.products[productId]}
                            />
                        )
                    }}/>
                    <Route exact path="/us" component={Us}/>
                    <Route exact path="/products" render={() => (
                        <Products
                            products={result}
                            getDataFromForm={this.getDataFromForm}
                        />
                    )}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route component={ErrorPage}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;