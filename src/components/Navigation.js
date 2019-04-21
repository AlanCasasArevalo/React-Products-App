import React from 'react'
import {Link} from "react-router-dom";
import NavegacionStyle from './NavegacionStyle.css'

const Navigation = () => {
    return (
        <nav className="navegacion">
            <Link to={'/us'}>Nosotros</Link>
            <Link to={'/products'}>Productos</Link>
            <Link to={'/contact'}>Contacto</Link>
        </nav>
    )
};
export default Navigation
