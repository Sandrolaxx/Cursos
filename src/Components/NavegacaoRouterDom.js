import React from 'react'
import { Link } from "react-router-dom";

const NavegacaoRouterDom = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/produtos">Produtos</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre/Formulário</Link>
                </li>
            </ul>
        </nav>)
} 

export default NavegacaoRouterDom;
