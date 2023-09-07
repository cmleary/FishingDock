import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    
    
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/fish">Fish</NavLink>
            <NavLink to="/form">Form</NavLink>
        </nav>
    );
}

export default NavBar;
