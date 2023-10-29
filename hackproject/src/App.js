import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import Recycling from './pages/recycling';
 
function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/index' element={<Home />} />
                <Route path='/recycling' element={<Recycling />} />
            </Routes>
            <Footer />
        </Router>
    );
}
 
export default App;