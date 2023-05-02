import React from 'react';
import { NavLink, Link } from "react-router-dom";

import "./navbar.css";

function Navbar() {

    return (
        <nav>
            <NavLink className="link" to='/'>Home</NavLink>
            <NavLink className="link" to='/about'>About</NavLink>
        </nav>
    );
}

export default Navbar;