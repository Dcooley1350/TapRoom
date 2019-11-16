import React from 'react';
import { Column } from 'simple-flexbox';
import PropTypes from 'prop-types';

function EmployeeOption (props) {
  var imgStyle = {
    height: '250',
    width: '450'

  };
  var optionCardStyle = {
      backgroundColor: '#ececeb'
  }

  return(
    <Column flexGrow={1} horizontal='center'>
        <div style={optionCardStyle} className="center container">
            <h2>{props.name}</h2>
            <img style={imgStyle} src={props.img}></img>
            <p>{props.description}</p>
        </div>
    </Column>
  );
}

EmployeeOption.propTypes ={
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string
}

export default EmployeeOption;