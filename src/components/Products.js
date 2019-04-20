import React, {Component} from 'react'

class Products extends Component {
    state = {}

    render() {
        return (
            <div className="productos">
                <h2>Nuestros productos</h2>
                <ul className="lista-productos">
                </ul>
            </div>
        );
    }
}

export default Products;