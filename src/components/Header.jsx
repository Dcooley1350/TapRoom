import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <nav>
            <div class="nav-wrapper">
                <Link className="brand-logo center" to='/'>Tap Room</Link>
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><Link to='Employees'>Employees</Link></li>
                    <li><Link to='Customers'>Customers</Link></li>
                </ul>
                <ul id="nav-mobile" class="Right hide-on-med-and-down">
                    <li><Link to='Login'>Login</Link></li>
                    <li><Link to='RegisterUser'>RegisterUser</Link></li>
                </ul>
            </div>
        </nav>
    )
}
