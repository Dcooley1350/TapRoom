import React from 'react';
import { Link } from 'react-router-dom';
import beer from '../img/beer.png';

function Header() {
  return(
    <header className="navbar-fixed">
        <nav>
            <div className="nav-wrapper">
                <a className="brand-logo center">Tap Room</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><Link to='/'><img src={beer} alt="beer icon"></img></Link></li>
                <li><Link to='Employees'>Employees</Link></li>
                <li><Link to='Customers'>Customers</Link></li>
                </ul>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to='Login'>Login</Link></li>
                <li><Link to='RegisterUser'>RegisterUser</Link></li>
                </ul>
            </div>
        </nav>
    </header>
  );
}

export default Header;