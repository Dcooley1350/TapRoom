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
      console.log("if")
      return(
        <SideBar kegList={this.state.masterKegList} selectedKeg={this.state.masterKegList[this.state.selectedKeg]} currentRouterPath={props.currentRouterPath}/>
      )
    }
    else {
      console.log(this.props.currentRouterPath)
      return(
        <SideBar kegList={this.state.masterKegList} currentRouterPath={this.props.currentRouterPath}/>
      )
    }
  }
  
  render() {
    const fillWholeHeight= {
      minHeight: '90vh',
      marginBottom: '0px'
    }
    return(
      <div style={fillWholeHeight} className='row'>
      <div className =' col l2'>
        {this.ConditionalSelectedTicket()}
      </div>
      <div style={fillWholeHeight} className="col l10 bubble-background">
        <KegList kegList={this.state.masterKegList} currentRouterPath={this.props.currentRouterPath} onSelectingKeg={this.handleSelectingKeg}/>
      </div>
    </div>
    )

  }
}

export default MainBeerMenu;