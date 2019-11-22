import React from 'react';
import KegList from './KegList';
import SideBar from './SideBar';

class MainBeerMenu extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      selectedKeg: '',
      masterKegList: {
        'a51a5c6a-f650-4819-8c6a-ee4fa6632256' : {
          name: 'Milwaukies Best',
          type: 'lager',
          brewer: 'GarbageBrewer',
          description: 'This beer will make your teeth rot out of your mouth and your stomach fall out of your butt',
          dateTapped: '01/21/2019',
          img: './thisimagethisimage.jpg'
        },
        'a51a5c6a-f650-4819-8c6a-ee4fa1111111' : {
          name: 'Dead Guy',
          type: 'lager',
          brewer: 'Rougue',
          description: 'This beer is TOIT. TOIT like a TOIGER.',
          dateTapped: '01/21/2019',
          img: './thisimagethisimage.jpg'

        },
        'a51a5c6a-f650-4819-8c6a-ee4fa4444444' : {
          name: 'RPM',
          type: 'IPA',
          brewer: 'CrossBones',
          description: 'This beer is great. Drink it with your friends. Drink it alone.',
          dateTapped: '01/21/2019',
          img: './thisimagethisimage.jpg'

        }

      },
      selectedKeg: null
    };
    this.handleNewKeg = this.handleNewKeg.bind(this);
  }
  handleNewKeg(){

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