import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import { useState } from 'react';
import Recycling from './pages/recycling';
import ListForm from './pages/ListForm';
import Events from './pages/Events';

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

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let listings = document.getElementById("listings");
        let div = document.createElement("div");
        let p = document.createElement("p");
        p.textContent = inputs.item;
        p.appendChild(div);
        listings.appendChild(div);
    }

    return (
        <Router>
            <div id="page-container">
                <div id="content-wrap">
                <Header />
                    <Routes>
                        <Route path='/index' element={<Home inputs={inputs} />} />
                        <Route path='/recycling' element={<Recycling />} />
                        <Route path='/ListForm' element={<ListForm inputs={inputs} onChange={handleChange} handleSubmit={handleSubmit}/>} />
                        <Route path='/Events' element={<Events/>} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}
 
export default App;