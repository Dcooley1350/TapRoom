import React from 'react';
import PropTypes from 'prop-types';
import EmployeeButtons from './EmployeeButtons';

const KegDetails = (props) => {
  let routeConditionalButtons = null;
  if(props.currentRouterPath === '/Employee'){
    routeConditionalButtons = <EmployeeButtons onDecrimentingKeg={props.onDecrimentingKeg} onReplacingKeg={props.onReplacingKeg} />;
  }
  
  return (  
    <div>
      <p>Keg Details</p>
      <p><strong>{props.selectedKeg.name}</strong></p>
      <p>Type:{props.selectedKeg.type}</p>
      <p>%: {props.selectedKeg.alcohol}</p>
      <p>By: {props.selectedKeg.brewer}</p>
      <p>{props.selectedKeg.description}</p>
      <p>Date Tapped: {props.selectedKeg.dateTapped}</p>
      <p>Remaining Contents: {props.selectedKeg.contents}</p>
      <p>{props.selectedKeg.img}</p>
      {routeConditionalButtons}
    </div>
  );
};
KegDetails.propTypes= {
  selectedkeg: PropTypes.object
};
 
export default KegDetails;