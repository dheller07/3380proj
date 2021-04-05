import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from './Login';
import Search from './Search';
import Employee from "./Employee";

function App() {

  return (
    <Router>
      <div className="App"><h1>LIBRARY DB</h1>
      <Switch>
      <Route exact path = "/" component = {Login }/>
      <Route exact path = "/Employee" component ={Employee}/>
      <Route exact path = "/Search" component = {Search}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;