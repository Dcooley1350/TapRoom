import React from 'react';
import BeerList from './BeerList';
import SideBar from './SideBar';

function MainBeerMenu() {

  return (
    <div className='row'>
      <div className ='col l2'>
        <SideBar />
      </div>
      <div className="col l10 fillArea bubble-background">
        <BeerList />
      </div>
    </div>
  );
}

export default MainBeerMenu;