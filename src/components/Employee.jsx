import React from 'react';
import Keg from './Keg';



function Employee() {
  const flexStyle={
    display: 'flex',
    justifyContent: 'space-between'
  }
  return (
    <div style={flexStyle}>
      {MasterKegList.map((keg) =>
      <Keg
      name={keg.name}
      type={keg.type}
      brewer={brewer}
      description={keg.description}
      img={keg.img}
      key={index}/>
      )};        
    </div>
  );
}

export default Employee;