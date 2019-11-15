import React from 'react';
import EndlessBeer from '../img/EndlessBeer.gif';
import '../css/globalStyles.css';


function Splash(){
    var BackgroundStyle = {
        position: "fixed",
        top: "0",
        width: "100%",
        height: "100%", 
        zIndex: "-1"
    }
    var imgStyle = {
        width: "100%",
        height: "100%"
    }
  return(
    <div className="fillArea">
      <div style={BackgroundStyle}>
        <img style={imgStyle} src={EndlessBeer}></img>
      </div>
      <h1>Welcome to the Tap Room!</h1>

    </div>  
  );
}

export default Splash;