import React from 'react';
import PropTypes from 'prop-types';
import KegDetails from './KegDetails'

const SideNav = (props) => {
    const sideNavStyle= {
        height: '100%',
        backgroundColor: '#ececeb'
    }
    return ( 
        <div style={sideNavStyle}>
            <p>Welcome Employee/Customer</p>
            <KegDetails />
        </div>
     );
}
 
export default SideNav;