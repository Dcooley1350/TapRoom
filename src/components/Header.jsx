import React from 'react';
import { Link } from 'react-router-dom';
import beer from '../img/beer.png';

function Header() {
  return(
    <nav>
      <div class="nav-wrapper">
        <h1 className="brand-logo center">Tap Room</h1>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><Link to='/'><img src={beer} alt="beer icon"></img></Link></li>
          <li><Link to='Employees'>Employees</Link></li>
          <li><Link to='Customers'>Customers</Link></li>
        </ul>
        <ul id="nav-mobile" className="Right hide-on-med-and-down">
          <li><Link to='Login'>Login</Link></li>
          <li><Link to='RegisterUser'>RegisterUser</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;