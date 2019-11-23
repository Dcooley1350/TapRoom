import React from 'react';
import Keg from './Keg';



function KegList(props) {
  const flexStyle={
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  };
  return (
    <div style={flexStyle}>
      {Object.keys(props.kegList).map((kegId) => { const keg = props.kegList[kegId];
        return(
          <Keg
            name={keg.name}
            type={keg.type}
            brewer={keg.brewer}
            description={keg.description}
            dateTapped
            img={keg.img}
            contents={keg.contents}
            kegId={kegId}
            onSelectingKeg={props.onSelectingKeg}/>
        );})};        
    </div>
  );
}

export default KegList;