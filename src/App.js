import React from 'react';
import State from './State';
import Menu from './Menu';
import Book from './Book';
import Api from './Api';
import Login from './Login';
import Home from './Home';
import Product from './Product';
import Hooks5 from './hooks/Hooks5';
import Contect from './Contect';
import {Switch, Route} from 'react-router-dom';


const App=()=>{
  if(sessionStorage.getItem('id')==null){
    return <Login/>
  }else{
    return(
      <>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}  />
        <Route exact path="/state" component={State}  />
        <Route exact path="/book" component={Book}  />
        <Route exact path="/api" component={Api}  />
        <Route exact path="/:index/hooks5" component={Hooks5}  />
        <Route exact path="/contect" component={Contect}  />
      </Switch>
      </>
    )
  }
}
export default App;