import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from './Login';
import Logout from './Logout';
import Seller from './Seller';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route path='/seller' component={Seller}></Route>
        <Route path='/logout' component={Logout}></Route>
      </Switch>  
    </Router>
    
  );
}

export default App;
