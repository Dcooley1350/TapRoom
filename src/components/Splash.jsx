import React from 'react';
import EndlessBeer from 'Endlessbeervideo.mp4';
import '../css/globalStyles.css';


function Splash(){
    return(
      <div className="fillArea">
          <div style="position: fixed; top: 0; width: 100%; height: 100%; z-index: -1;">
              <video style="width:100%; height: 100%" no-controls loop autoplay src={EndlessBeer}></video>
          </div>
          <h1>Welcome to the Tap Room!</h1>

      </div>  
    );
}

export default Splash;