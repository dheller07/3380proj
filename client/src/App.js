import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom"
import Login from './Login';
import Customer from './Customer';

function App() {

  return (
    <Router>
    <div className="App"><h1>LIBRARY DB</h1>
      <NavLink exact activeClassName="active" to= "/"></NavLink>
      <NavLink exact activeClassName="active" to= "/customer"></NavLink>
      
      <hr/>

      <Switch>
        <Route exact path = "/" component = {Login} />
        <Route path = "/customer" component = {Customer} />

      </Switch>
    </div>
    </Router>
  );
}

export default App;