import React from 'react';
import KegList from './KegList';
import SideNav from './SideNav';
import NewKegForm from './NewKegForm';

class MainBeerMenu extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      selectedKeg: null,
      addKegVisible: false,
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
    };
    this.handleNewKeg = this.handleNewKeg.bind(this);
    this.handleSelectingKeg = this.handleSelectingKeg.bind(this);
    this.handleDecrimentingKeg = this.handleDecrimentingKeg.bind(this);
    this.handleReplacingKeg = this.handleReplacingKeg.bind(this);
    this.handleTogglingNewKegForm = this.handleTogglingNewKegForm.bind(this);
  }
  handleTogglingNewKegForm(){
    let kegFormState = this.state.addKegVisible;
    kegFormState = !kegFormState;
    this.setState({addKegVisible: kegFormState});
  }
  handleReplacingKeg(){
    let foundKeg = this.state.masterKegList[this.state.selectedKeg];
    foundKeg.contents = 1000;
    this.setState();
  }
  handleDecrimentingKeg(){
    let foundKeg = this.state.masterKegList[this.state.selectedKeg];
    foundKeg.contents--;
    this.setState();
  }

  handleNewKeg(newKeg){
    var tempKegList = Object.assign({}, this.state.masterKegList,{ [newKeg.id]: newKeg});
    this.setState({masterKegList: tempKegList});
  }
  handleSelectingKeg(kegId){
    this.setState({selectedKeg: kegId});
  }
  ConditionalSelectedKeg(){
    if(this.state.selectedKeg != null){
      return(
        <SideNav kegList={this.state.masterKegList} selectedKeg={this.state.masterKegList[this.state.selectedKeg]} onDecrimentingKeg={this.handleDecrimentingKeg} onReplacingKeg={this.handleReplacingKeg} currentRouterPath={this.props.currentRouterPath} onTogglingNewKegForm={this.handleTogglingNewKegForm} newKegShowing={this.state.addKegVisible}/>
      );
    }
    else {
      return(
        <SideNav kegList={this.state.masterKegList} currentRouterPath={this.props.currentRouterPath} onTogglingNewKegForm={this.handleTogglingNewKegForm} newKegShowing={this.state.addKegVisible}/>
      );
    }
  }

  render() {
    const lStyle= {
      minHeight: '90vh',
      marginBottom: '0px',
    };
    const l2Style={
      backgroundColor: '#ececeb',
    };

    return(
      <div style={lStyle} className='row'>
        <div style={l2Style} className =' col l2'>
          {this.ConditionalSelectedKeg()}
        </div>
        <div style={lStyle} className="col l10 bubble-background">
          {this.state.addKegVisible ? <NewKegForm onNewKeg={this.handleNewKeg} onTogglingNewKegForm={this.handleTogglingNewKegForm} /> : <KegList kegList={this.state.masterKegList} onSelectingKeg={this.handleSelectingKeg}/>}
        </div>
      </div>
    );

  }
}

export default MainBeerMenu;
