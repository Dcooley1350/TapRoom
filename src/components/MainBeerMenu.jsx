import React from 'react';
import KegList from './KegList';
import SideBar from './SideBar';

class MainBeerMenu extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      selectedKeg: null,
      masterKegList: {
        'a51a5c6a-f650-4819-8c6a-ee4fa6632256' : {
          name: 'Milwaukies Best',
          type: 'lager',
          alcohol: 7,
          brewer: 'GarbageBrewer',
          description: 'This beer will make your teeth rot out of your mouth and your stomach fall out of your butt',
          dateTapped: '01/21/2019',
          contents: 1000,
          img: './thisimagethisimage.jpg'
        },
        'a51a5c6a-f650-4819-8c6a-ee4fa1111111' : {
          name: 'Dead Guy',
          type: 'lager',
          alcohol: 8,
          brewer: 'Rougue',
          description: 'This beer is TOIT. TOIT like a TOIGER.',
          dateTapped: '01/21/2019',
          contents: 1000,
          img: './thisimagethisimage.jpg'

        },
        'a51a5c6a-f650-4819-8c6a-ee4fa4444444' : {
          name: 'RPM',
          type: 'IPA',
          alcohol: 9,
          brewer: 'CrossBones',
          description: 'This beer is great. Drink it with your friends. Drink it alone.',
          dateTapped: '01/21/2019',
          contents: 1000,
          img: './thisimagethisimage.jpg'
        }

      },
      selectedKeg: null
    };
    this.handleNewKeg = this.handleNewKeg.bind(this);
    this.handleSelectingKeg = this.handleSelectingKeg.bind(this);
  }
  handleNewKeg(newKeg){
    var tempKegList = Object.assign({}, this.state.masterKegList,{ [newKeg.id]: newKeg});
    this.setState({masterKegList: tempKegList});
  }
  handleSelectingKeg(kegId){
    this.setState({selectedKeg: kegId});
  }
  ConditionalSelectedTicket(){
    if(this.state.selectedKeg != null){
      return(
        <SideBar kegList={this.state.masterKegList} selectedKeg={this.state.masterKegList[this.state.selectedKeg]} currentRouterPath={this.props.currentRouterPath}/>
      )
    }
    else {
      return(
        <SideBar kegList={this.state.masterKegList} currentRouterPath={this.props.currentRouterPath}/>
      )
    }
  }
  
  render() {
    const lStyle= {
      minHeight: '90vh',
      marginBottom: '0px',
    }

    return(
      <div style={lStyle} className='row'>
      <div style={lStyle} className =' col l2'>
        {this.ConditionalSelectedTicket()}
      </div>
      <div style={lStyle} className="col l10 bubble-background">
        <KegList kegList={this.state.masterKegList} currentRouterPath={this.props.currentRouterPath} onSelectingKeg={this.handleSelectingKeg}/>
      </div>
    </div>
    )

  }
}

export default MainBeerMenu;