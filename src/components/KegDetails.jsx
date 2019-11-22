import React from 'react';
import PropTypes from 'prop-types';

const KegDetails = (props) => {
    function RouteConditionalButtons () {
        if(this.props.currentRouterPath === '/employee'){
            return(<EmployeeButtons onDecrimentingKeg={props.onDecrimentingKeg} onReplacingKeg={props.onReplacingkeg} />)
        }
    }
    return (  
        <div>
            <p>Keg Details</p>
            <p>{this.props.selectedKeg.name}</p>
            <p>{this.props.selectedKeg.type}</p>
            <p>{this.props.selectedKeg.brewer}</p>
            <p>{this.props.selectedKeg.description}</p>
            <p>{this.props.selectedKeg.dateTapped}</p>
            <p>{this.props.selectedKeg.img}</p>
            {RouteConditionalButtons}
        </div>
    );
}
 
export default KegDetails;