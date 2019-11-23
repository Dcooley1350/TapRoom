import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EmployeeButtons = (props) => {
  const divStyle = {
    marginBottom: '0',
  };
  const buttonStyle = {
    width: '100%',
    backgroundColor: '#10316b',
    margin: '3px'
  };
  console.log(props)
  return (
    <div style={divStyle}>
      <button onClick={()=>{props.onDecrimentingKeg();}} style={buttonStyle}className="button btn-small">Vend 1 Beer</button> 
      <button onClick={()=>{props.onReplacingKeg();}} style={buttonStyle}className="button btn-small">Replace Keg</button>
      <Link to='/NewKeg'><button style={buttonStyle}className="button btn-small">Add New Keg</button></Link>

    </div>
  // <button onClick={props.onEditKeg} className="butto btn-small">Edit Keg</button> 
  // <button onClick={props.onDeleteKeg} className="btn-small button">Remove Keg</button> 
  );
};

EmployeeButtons.propTypes= {
  onDecrimentingKeg: PropTypes.func,
  onReplacingKeg: PropTypes.func
};
 
export default EmployeeButtons;