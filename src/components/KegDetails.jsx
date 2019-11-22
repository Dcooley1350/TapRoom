import React from 'react';
import PropTypes from 'prop-types';

const KegDetails = (props) => {
  function RouteConditionalButtons () {
    if(this.props.currentRouterPath === '/employee'){
      return(<EmployeeButtons onDecrimentingKeg={props.onDecrimentingKeg} onReplacingKeg={props.onReplacingkeg} />);
    }
  }
  return (  
    <div>
      <p>Keg Details</p>
      <p>{props.selectedKeg.name}</p>
      <p>{props.selectedKeg.type}</p>
      <p>{props.selectedKeg.brewer}</p>
      <p>{props.selectedKeg.description}</p>
      <p>{props.selectedKeg.dateTapped}</p>
      <p>{props.selectedKeg.img}</p>
      {RouteConditionalButtons}
    </div>
  );
};
KegDetails.propTypes= {
  selectedkeg: PropTypes.object
};
 
export default KegDetails;