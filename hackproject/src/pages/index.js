import React from 'react';
import { Link } from "react-router-dom";
 
const Home = () => {
    return (
        <div class="display-grid">
            
            <div><img src="./drawers.webp" alt="Plastic Drawers"></img>
            <p><Link to="/Listings/PlasticDrawers"><b>Plastic Drawers</b></Link>
            <br></br>On Campus, South</p></div>

            <div><img src="./beanBag.jpeg" alt="Bean Bag Chair"></img>
            <p><Link to="/Listings/BeanBagChair"><b>Bean Bag Chair</b></Link>
            <br></br>Off Campus, Central</p></div>

            <div><img height="200" src="/calculator.jpeg" alt="TI-84 Calculator"></img>
            <p><Link to="/Listings/Calculator"><b>TI-84 Calculator</b></Link>
            <br></br>On Campus, North</p></div>

            <div><img src="./tshirt.jpeg" alt="Library T-Shirt"></img>
            <p><Link to="/Listings/Tshit"><b>Library T-Shirt</b></Link>
            <br></br>Off Campus, North East</p></div>

            <div><img src="./wallArt.jpeg" alt="Obnoxious Wall Art"></img>
            <p><Link to="/Listings/ObnoxiousWallArt"><b>Obnoxious Wall Art</b></Link>
            <br></br>Off Campus, South West</p></div>

            <div><img src="./nokia.jpeg" alt="Nokia 8000 Tough"></img>
            <p><Link to="/Listings/Nokia"><b>Nokia 8000 Tough</b></Link>
            <br></br>Off Campus, West</p></div>

            <div><img height="200" src="./mirror.jpeg" alt="Oval-shapped Mirror"></img>
            <p><Link to="/Listings/Mirror"><b>Oval-shaped Mirror</b></Link>
            <br></br>On Campus, South</p></div>

            <div><img src="./HubCap.jpeg" alt="Hub Cap (2007 Honda Civic)"></img>
            <p><Link to="/Listings/HuBCap"><b>Hub Cap (2007 Honda Civic)</b></Link>
            <br></br>Off Campus, North East</p></div>
        </div>
    );
};
 
export default Home;