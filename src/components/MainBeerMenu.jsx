import React from 'react';
import KegList from './KegList';
import SideBar from './SideBar';

class MainBeerMenu extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      masterKegList = {},
      selectedKeg: null
    };
    this.handleNewKeg = this.handleNewKeg.bind(this);
  }
  


  render(props) {
    <div className='row'>
      <div className ='col l2'>
        <SideBar kegList={this.state.kegList} selectedKeg={this.state.selectedKeg}
        currentRouterPath={props.currentRouterPath}/>
      </div>
      <div className="col l10 fillArea bubble-background">
        <KegList kegList={this.state.masterKegList} currentRouterPath={props.currentRouterPath}/>
      </div>
    </div>

  };
}

export default MainBeerMenu;