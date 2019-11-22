import React from 'react';
import PropTypes from 'prop-types';
import KegDetails from './KegDetails'

const SideNav = (props) => {
    const sideNavStyle= {
        height: '100%',
        backgroundColor: '#ececeb'
    }
    function ConditionalTitleRender() {
        if(this.props.currentRouterPath === '/employee'){
            <p>Welcome Employee</p>
        }
        else if(this.props.currentRouterPath === '/customer'){
            <p>Welcome Customer</p>
        }
    }
    return ( 
        <div style={sideNavStyle}>
            {ConditionalTitleRender()}
            <KegDetails selectedKeg={this.props.selectedKeg} currentRouterPath={this.props.currentRouterPath}/>
        </div>
     );
}
 
export default SideNav;