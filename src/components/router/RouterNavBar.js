//This is  React Router Nav bar using link tag
import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
// import Navbar from '../navbar/Navbar'
import './RouterNavBar.css'


export default function RouterNavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <NavLink to="/"><img src="https://upload.wikimedia.org/wikipedia/en/b/b8/Reliance_Smart_Bazaar.png" alt="Logo" className="logo" /></NavLink>
            </div>
            <ul className="navbar-links" >
                <li><NavLink to="/">Default</NavLink></li>
                <li><NavLink to="/home">Homes</NavLink></li>
                <li><NavLink to="/categories">Categorise</NavLink></li>
                <li><NavLink to="/aboutus">AboutUs</NavLink></li>
                <li><NavLink to="/carrer">Carrer</NavLink></li>
                <li><NavLink to="/List">Product List</NavLink></li>
                <li><NavLink to="/notfound">Notfound</NavLink></li>
            </ul>
        </nav>
    );
}

