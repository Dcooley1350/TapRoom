import React from 'react';
import PropTypes from 'prop-types';
import KegDetails from './KegDetails';

const SideNav = (props) => {
  let greeting = null;
  let details = null;
  let newKegButton = null;
  const sideNavStyle= {
    height: '100%',
    backgroundColor: '#ececeb',
    width: '100%'
  };
  const buttonStyle = {
    width: '100%',
    backgroundColor: '#e25822',
    margin: '3px'
  };
  if(props.currentRouterPath === '/Employee'){
    greeting = <p>Welcome Employee</p>;
  }
  else if(props.currentRouterPath === '/Customer'){
    greeting= <p>Welcome Customer</p>;
  }
  
  if(props.selectedKeg != null) {
    details= <KegDetails selectedKeg={props.selectedKeg} onDecrimentingKeg={props.onDecrimentingKeg} onReplacingKeg={props.onReplacingKeg} currentRouterPath={props.currentRouterPath}/>;
  } else {
    details = <p>Select a keg to see details!</p>;
  }
  if(props.currentRouterPath==='/Employee'){
    if(!props.newKegShowing) {
      newKegButton = <button onClick={()=> {props.onTogglingNewKegForm();}}className='button btn-large' style={buttonStyle}>Add Keg</button>
    } else { newKegButton = <button onClick={() => { props.onTogglingNewKegForm(); }} className='button btn-large' style={buttonStyle}>Keg List</button> }
  }
  return ( 
    <div style={sideNavStyle}>
      {greeting}<br/>
      {details}<br/>
      <div>{newKegButton}</div>
    </div>
  );
};
 
export default SideNav;