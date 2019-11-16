import React from 'react';
import { Column } from 'simple-flexbox';
import PropTypes from 'prop-types';

function Option (props) {
  var imgStyle = {
    height: '250',
    width: '450'

  };
  var optionCardStyle = {
    borderRadius: '25px',
    backgroundColor: '#ececeb',
    padding: '20'
  };

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

Option.propTypes ={
  name: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string
};

export default Option;