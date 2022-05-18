import React from 'react';
import '../src/css/foodie.css';
import Navbar from "./sections/Navbar.jsx";
import Footer from "./sections/Footer.jsx";
import Bodysection from './Bodysection';
import {BrowserRouter as Router} from 'react-router-dom'


function App() {
    return (
        <Router>
            <div>
                <Navbar/>
                <Bodysection/>
                <Footer/>
            </div>
        </Router>
        
    );
}

export default App;
