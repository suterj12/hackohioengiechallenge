import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import Recycling from './pages/recycling';
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/index' element={<Home />} />
                <Route path='/recycling' element={<Recycling />} />
            </Routes>
        </Router>
    );
}
 
export default App;