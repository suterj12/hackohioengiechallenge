import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Recycling from './pages/recycling';
import ListForm from './pages/ListForm';
import Events from './pages/Events';
import PlasticDrawers from './pages/Listings/PlasticDrawers';
import BeanBagChair from './pages/Listings/BeanBagChair';
import Calculator from './pages/Listings/Calculator';
import HubCap from './pages/Listings/HubCap';
import Mirror from './pages/Listings/Mirror';
import Nokia from './pages/Listings/Nokia';
import ObnoxiousWallArt from './pages/Listings/ObnoxiousWallArt';
import Tshirt from './pages/Listings/Tshirt';
import Map from './Map';


function Home(props) {

    useEffect(() => {
        let stuff = document.getElementById("listings");
        for (let i = 0; i < props.newListings.length; i++) {
            stuff.appendChild(props.newListings[i]);
        }
        // eslint-disable-next-line 
    }, []);

    return(
        <div id="listings" class="display-grid">  
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
}

 
function App() {
    
    let listings = [];
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let listing = document.createElement("div");
        let image = document.createElement("img");
        image.src = "./cone.jpg";
        listing.appendChild(image);
        let p = document.createElement("p");
        listing.appendChild(p);
        let link = document.createElement("a");
        link.textContent = inputs.item;
        listing.appendChild(link);
        let name = document.createElement("p");
        name.textContent = inputs.areas
        listing.appendChild(name);
        listings.push(listing);
    }

    return (
        <Router>
            <div id="page-container">
                <div id="content-wrap">
                <Header />
                    <Routes>
                        <Route path='/' element={<Home newListings={listings}/>} />
                        <Route path='/recycling' element={<Recycling />} />
                        <Route path='/ListForm' element={<ListForm inputs={inputs} onChange={handleChange} handleSubmit={handleSubmit}/>} />
                        <Route path='/Events' element={<Events/>} />
                        <Route path='/Listings/Calculator' element={<Calculator/>}/>
                        <Route path='/Listings/HubCap' element={<HubCap/>}/>
                        <Route path='/Listings/Mirror' element={<Mirror/>}/>
                        <Route path='/Listings/Nokia' element={<Nokia/>}/>
                        <Route path='/Listings/ObnoxiousWallArt' element={<ObnoxiousWallArt/>}/>
                        <Route path='/Listings/Tshirt' element={<Tshirt/>}/>
                        <Route path='/Listings/BeanBagChair' element={<BeanBagChair/>}/>
                        <Route path='/Listings/PlasticDrawers' element={<PlasticDrawers/>}/>
                        <Route path='Map' element={<Map/>} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}
 
export default App;