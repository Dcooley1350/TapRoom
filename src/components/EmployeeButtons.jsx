import React from 'react';
import PropTypes from 'prop-types';

const EmployeeButtons = (props) => {
  return (
    <div>
      <button onClick={props.onDecrimentingKeg} className="button btn-small">Vend 1</button> 
      <button onClick={props.onReplacingKeg} className="button btn-small">Replace Keg</button> 
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