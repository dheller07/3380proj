import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from './Login';
import Search from './Search';
import Employee from "./Employee";
import Customer from "./Customer";

function App() {

  return (
    <Router>
      <div className="App"><h1>LIBRARY</h1>
      <Switch>
      <Route exact path = "/" component = {Login }/>
      <Route exact path = "/Employee" component ={Employee}/>
      <Route exact path = "/Search" component = {Search}/>
      <Route exact path = "/Search1" component = {Customer}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;