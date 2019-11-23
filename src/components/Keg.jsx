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
  console.log(props.kegId);

  return(
    
      <div onClick={() => {props.onSelectingKeg(props.kegId);}} style={kegCardStyle} className="center container">
        <h4>{props.name}</h4>
        <img style={imgStyle} src={props.img}></img>
        <p>{props.description}</p>
        <p>{props.alcohol}</p>
        <p>{props.contents}</p>
        <p>{props.description}</p>
        
      </div>
    
  );
}

Keg.propTypes ={
  name: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string
};

export default Keg;