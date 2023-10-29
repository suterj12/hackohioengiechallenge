import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import Recycling from './pages/recycling';
import ListForm from './pages/ListForm';
 
function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/index' element={<Home />} />
                <Route path='/recycling' element={<Recycling />} />
                <Route path='/ListForm' element={<ListForm />} />
            </Routes>
            <Footer />
        </Router>
    );
}
 
export default App;