import React from "react";
import { Link } from "react-router-dom";
 
const Header = () => {
    return (
        <header>
        <div id="header">
            <h1>Hack OHI/O 11 Engie Challenge</h1>
            <div class="navbar">
                <Link to="/index">Home</Link>
                <Link to="/recycling">Recycling</Link>
                <Link to="/ListForm">List an Item Form</Link>
            </div>
        </div>
    </header>
    );
};
 
export default Header;