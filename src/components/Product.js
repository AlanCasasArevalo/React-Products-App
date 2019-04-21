import React, {Component} from 'react'
import ProductStyle from './ProductStyle.css'
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

class Product extends Component{
    render() {
        const {id, nombre, precio, imagen, descripcion} = this.props.product;

        return (
            <li>
                <img src={`img/${imagen}.png`} alt={nombre}/>
                <p>{nombre} <span> $ {precio}</span></p>
                <Link to={`/product/${id}`}>
                    Mas info
                </Link>
            </li>
        );
    }
}

Product.propTypes = {
    product: PropTypes.object.isRequired
};

export default Product;