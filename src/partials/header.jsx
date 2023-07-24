import { useState } from 'react';
import logo from '../assets/Ghaith-logo-temp.png'
import { Link, NavLink } from 'react-router-dom';
import "../styles/Header.css"
// import LazyLoad from 'react-lazy-load'
// Lazy Loading the assets improves our web app performance and increases the SEO rate
const Header = () => {
    return (  
        
        <header>
           <nav>
           <ul className='navlinks'>
           <li><NavLink className='navlink' to='/cases'>الحالات</NavLink></li>
           <li><NavLink className='navlink' to='/about'> من نحن</NavLink></li>
           <li><NavLink className='navlink' to='/contact'>تواصل معنا</NavLink></li>
           </ul>
           </nav>
           <Link className='img' to="/"><img src={logo} alt="Ghaith-logo" loading='lazy' width="85px" height="auto" /></Link>
        </header>
    );
}
export default Header;