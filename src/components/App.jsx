import React from 'react';
import '../css/globalStyles.css';
import Header from './Header';
import Footer from './Footer';
import Splash from './Splash';
import Employee from './Employee';
import Customer from './Customer';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

export function App(){
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Splash}/>
        <Route path='/Employee' component={Employee}/>
        <Route exact path='/Customer' component={Customer}/>
        <Route component={Error404} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;