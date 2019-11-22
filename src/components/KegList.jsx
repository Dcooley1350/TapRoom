import React from 'react';
import Keg from './Keg';



function KegList(props) {
  const flexStyle={
    display: 'flex',
    justifyContent: 'space-between'
  }
  return (
    <div style={flexStyle}>
      {props.kegList.map((keg) =>
      <Keg
      name={keg.name}
      type={keg.type}
      brewer={brewer}
      description={keg.description}
      dateTapped
      img={keg.img}
      contents={keg.contents}
      key={keg.id}/>
      )};        
    </div>
  );
}

export default KegList;