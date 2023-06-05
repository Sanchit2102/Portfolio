import React, { useState } from 'react';
import { useLocation, Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [navbarActive, setNavbarActive] = useState(false);

  function toggleNavbar() {
    setNavbarActive(!navbarActive);
  }

  const location = useLocation();
  const pathname = location.pathname;
 
  

  return (
    // <div className="app">
<>
    <header>
      <div className="logo"><span className='logo-s'>S</span>anchit</div>
      <div className="hamburger" onClick={toggleNavbar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className={navbarActive ? "nav-bar active" : "nav-bar"}>
        <ul>
          <li className='nav-item'>
            <Link to="/" className={pathname ==="/"? "active" :" "}>Home</Link>
          </li>
        
          <li>
            <Link to="/Projects"  className={pathname ==="/Projects"? "active" :" "}>Projects</Link>
          </li>
          <li>
            <Link to="/About"  className={pathname ==="/About"? "active" :" "}>About</Link>
          </li>
         
        </ul>
      </nav>
    </header>
</>
    // </div>
  );
}

export default Navbar;
