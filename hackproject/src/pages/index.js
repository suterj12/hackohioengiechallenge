import React from 'react';
import { Link } from "react-router-dom";
 
const NotHome = (props) => {
    return (
        <div class="display-grid">
            
            <div><img src="./drawers.webp" alt="Plastic Drawers"></img>
            <p><Link to="/Listings/PlasticDrawers">Plastic Drawers</Link>
            <br></br>On Campus, South</p></div>
            <div><img src="./beanBag.jpeg" alt="Bean Bag Chair"></img>
            <p><b>Bean Bag Chair</b>
            <br></br>Off Campus, Central</p></div>
            <div><img height="200" src="/calculator.jpeg" alt="TI-84 Calculator"></img>
            <p><b>TI-84 Calculator</b>
            <br></br>On Campus, North</p></div>
            <div><img src="./tshirt.jpeg" alt="Library T-Shirt"></img>
            <p><b>Library T-Shirt</b>
            <br></br>Off Campus, North East</p></div>
            <div><img src="./wallArt.jpeg" alt="Obnoxious Wall Art"></img>
            <p><b>Obnoxious Wall Art</b>
            <br></br>Off Campus, South West</p></div>
            <div><img src="./nokia.jpeg" alt="Nokia 8000 Tough"></img>
            <p><b>Nokia 8000 Tough</b>
            <br></br>Off Campus, West</p></div>
            <div><img height="200" src="./mirror.jpeg" alt="Oval-shapped Mirror"></img>
            <p><b>Oval-shapped Mirror</b>
            <br></br>On Campus, South</p></div>
            <div><img src="./HubCap.jpeg" alt="Hub Cap (2007 Honda Civic)"></img>
            <p><b>Hub Cap (2007 Honda Civic)</b>
            <br></br>Off Campus, North East</p></div>
        </div>
    );
};
 
export default NotHome;