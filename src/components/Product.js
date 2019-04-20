import React, {Component} from 'react'

class Product extends Component{
    render() {
        const product = this.props.product;
        console.log("producto", product);
        return (
            <div>
                <h1>Desde product</h1>
            </div>
        );
    }
}

export default Product;