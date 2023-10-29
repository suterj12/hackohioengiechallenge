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
import BeanBagChair from './pages/Listings/BeanBagChair';
import Calculator from './pages/Listings/Calculator';
import HubCap from './pages/Listings/HubCap';
import Mirror from './pages/Listings/Mirror';
import Nokia from './pages/Listings/Nokia';
import ObnoxiousWallArt from './pages/Listings/ObnoxiousWallArt';
import Tshirt from './pages/Listings/Tshirt';
import Map from './Map';


function Home() {
    return(
    <div id="listings" class="display-grid">
            <div><img src="./HubCap.jpeg" alt="Stolen car part."></img><p>HubCap</p></div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
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