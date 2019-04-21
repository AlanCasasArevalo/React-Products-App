import React from 'react'
import {NavLink} from "react-router-dom";
import NavegacionStyle from './NavegacionStyle.css'

const Navigation = () => {
    return (
        <nav className="navegacion">
            <NavLink to={'/us'} activeClassName="activo">Nosotros</NavLink>
            <NavLink to={'/products'} activeClassName="activo">Productos</NavLink>
            <NavLink to={'/contact'} activeClassName="activo">Contacto</NavLink>
        </nav>
    )
};
export default Navigation
