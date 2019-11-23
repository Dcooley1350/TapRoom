import React from 'react';
import PropTypes from 'prop-types';
import KegDetails from './KegDetails';

const SideNav = (props) => {
  let greeting = null;
  let details = null;
  const sideNavStyle= {
    height: '100%',
    backgroundColor: '#ececeb'
  };
  if(props.currentRouterPath === '/Employee'){
    greeting = <p>Welcome Employee</p>;
  }
  else if(props.currentRouterPath === '/Customer'){
    greeting= <p>Welcome Customer</p>;
  }
  
  console.log(props.onReplacingKeg);
  if(props.selectedKeg != null) {
    details= <KegDetails selectedKeg={props.selectedKeg} onDecrimentingKeg={props.onDecrimentingKeg} onReplacingKeg={props.onReplacingKeg} currentRouterPath={props.currentRouterPath}/>;
  } else {
    details = <p>Select a keg to see details!</p>;
  }
  
  return ( 
    <div style={sideNavStyle}>
      {greeting}
      {details}
    </div>
  );
};
 
export default SideNav;