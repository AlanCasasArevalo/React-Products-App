import React, {Component} from 'react'
import Products from "./Products";
import PropTypes from "prop-types";

class ProductDetail extends Component{
    render() {
        const {id, nombre, precio, imagen, descripcion} = this.props.productDetail;
        return (
            <div>
                <h1>Product detail</h1>
            </div>
        );
    }
}
ProductDetail.propTypes = {
    productDetail: PropTypes.object.isRequired
};

export default ProductDetail;