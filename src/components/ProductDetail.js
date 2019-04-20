import React, {Component} from 'react'
import PropTypes from "prop-types";
import ProductDetailStyle from './ProductDetailStyle.css'

class ProductDetail extends Component{
    render() {
        const {id, nombre, precio, imagen, descripcion} = this.props.productDetail;

        if (!id) return null;

        return (
            <div className="info-producto">
                <div className="imagen">
                    <img src={`/img/${imagen}.png`} alt="camiseta"/>
                </div>
                <div className="info">
                    <h2>{nombre}</h2>
                    <p className="precio">$ {precio}</p>
                    <p>{descripcion}</p>
                </div>
            </div>
        );
    }
}
ProductDetail.propTypes = {
    productDetail: PropTypes.object.isRequired
};

export default ProductDetail;