import React from "react";

function NavBar({ onChangePage }) {
    
    function handleLinkClick(e) {
        e.preventDefault()
        onChangePage(e.target.pathname)
    }
    
    return (
        <nav>
            <a onClick={handleLinkClick} href="/">Home</a>
            <a onClick={handleLinkClick} href="/fish">Fish</a>
            <a onClick={handleLinkClick} href="/form">Form</a>
        </nav>
    );
}

export default NavBar;
