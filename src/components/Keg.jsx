import React from 'react';
import PropTypes from 'prop-types';

function Keg (props) {
  var imgStyle = {
    height: '',
    minWidth: '100',
    maxWidth: '200'
  };
  var kegCardStyle = {
    borderRadius: '25px',
    backgroundColor: '#ececeb',
    padding: '20',
    height: '300',
    width: '250',
    
  };

  return(
    
    <div onClick={() => {props.onSelectingKeg(props.kegId);}} style={kegCardStyle} className="center container">
      <h4>{props.name}</h4>
      <h5>{props.brewer}</h5>
      <img style={imgStyle} src={props.img}></img>
        
    </div>
    
  );
}

Keg.propTypes ={
  name: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string
};

export default Keg;