import React from 'react';
import EndlessBeer from '../img/EndlessBeerDark.gif';
import '../css/globalStyles.css';


function Splash(){
  var BackgroundStyle = {
    position: 'fixed',
    top: '0',
    width: '100%',
    height: '100%', 
    zIndex: '-1'
  };
  var imgStyle = {
    width: '100%',
    // height: "100%"
  };
  var splashText = {
    color: 'black',
    marginLeft: '5%',
    display: 'flex',
    alignItems: 'flex-end',
  };    
  return(
    <div className="fillArea">
      <div style={BackgroundStyle}>
        <img style={imgStyle} src={EndlessBeer}></img>
      </div>
      <div style={splashText}>
        <h1><strong>Welcome to the Tap Room!</strong></h1>
      </div>
    </div>  
  );
}

export default Splash;