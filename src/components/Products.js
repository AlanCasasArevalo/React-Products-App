import React, {Component} from 'react'
import Product from "./Product";
import PropTypes from "prop-types";

class Products extends Component {
    state = {}

    render() {
        const products = this.props.products
        return (
            <div className="productos">
                <h2>Nuestros productos</h2>
                <ul className="lista-productos">
                    {Object.keys(products).map(key => (
                        <Product
                            key={key}
                            product={products[key]}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

Products.propTypes = {
    products: PropTypes.array.isRequired
};

export default Products;