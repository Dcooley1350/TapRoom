import React from 'react';
import PropTypes from 'prop-types';
import KegDetails from './KegDetails';

const SideNav = (props) => {
  const sideNavStyle= {
    height: '100%',
    backgroundColor: '#ececeb'
  };
  function ConditionalTitleRender() {
      console.log(props.currentRouterPath);
    if(props.currentRouterPath === '/Employee'){
      return(<p>Welcome Employee</p>);
    }
    else if(props.currentRouterPath === '/Customer'){
      return(<p>Welcome Customer</p>)
    }
  }
  console.log(props.selectedKeg);
  return ( 
    <div style={sideNavStyle}>
      {ConditionalTitleRender()}
      {/* <KegDetails selectedKeg={props.selectedKeg} currentRouterPath={props.currentRouterPath}/> */}
    </div>
  );
};
 
export default SideNav;