import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import { useState, useEffect } from 'react';
import Recycling from './pages/recycling';
import ListForm from './pages/ListForm';
import Events from './pages/Events';
import { Link } from 'react-router-dom';
import PlasticDrawers from './pages/Listings/PlasticDrawers';

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
        let name = document.createElement("p");
        name.textContent = inputs.item;
        listing.appendChild(name);
        listings.push(listing);
    }

    return (
        <Router>
            <div id="page-container">
                <div id="content-wrap">
                <Header />
                    <Routes>
                        <Route path='/' element={<Home inputs={inputs} newListings={listings}/>} />
                        <Route path='/recycling' element={<Recycling />} />
                        <Route path='/ListForm' element={<ListForm inputs={inputs} onChange={handleChange} handleSubmit={handleSubmit}/>} />
                        <Route path='/Events' element={<Events/>} />
                        <Route path='/Listings/PlasticDrawers' element={<PlasticDrawers/>}/>
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}
 
export default App;