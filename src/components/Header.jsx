import React from 'react';
import { Link } from 'react-router-dom';
import beer from '../img/beer.png';

function Header() {
    var navColor = {
        backgroundColor: "#e25822",
        color: 'black',
        fontWeight: 'bold'
    }
    var navTextStyle ={
        color: 'black',
        fontWeight: 'bold'
    }

  return(
    <header  className="navbar-fixed">
      <nav>
        <div style={navColor} className="nav-wrapper">
          <a style={navColor} className="brand-logo center">Tap Room</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><Link to='/'><i><img src={beer} alt="beer icon"></img></i></Link></li>
            <li><Link style={navTextStyle} to='Employees'>Employees</Link></li>
            <li><Link style={navTextStyle} to='Customers'>Customers</Link></li>
          </ul>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link style={navTextStyle} to='Login'>Login</Link></li>
            <li><Link style={navTextStyle} to='RegisterUser'>RegisterUser</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;