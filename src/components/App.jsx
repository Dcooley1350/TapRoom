import React from 'react';
import '../css/globalStyles.css';
import Header from './Header';
import Footer from './Footer';
import Splash from './Splash';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import MainBeerMenu from './MainBeerMenu';

function App(){
  return(
    <div id="page-container">
      <Header/>
      <main id="content-wrap" className="fillArea">
        <Switch>
          <Route exact path='/' component={Splash}/>
          <Route path='/Employee' render={(props) => <MainBeerMenu currentRouterPath={props.location.path}/>}/>
          <Route exact path='/Customer' render={(props) => <MainBeerMenu currentRouterPath={props.location.path}/>}/>
          <Route component={Error404} />
        </Switch>
      </main>
      <Footer/>
    </div>
  );
}

export default App;