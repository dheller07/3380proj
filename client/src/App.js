import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Customer from "./Customer";
import Employee1 from "./Employee1";
import AddItems from "./AddItems";
import DeleteItems from "./DeleteItems"

function App() {
  return (
    <Router>
      <div className="App"><h1>LIBRARY</h1>
      <Switch>
      <Route exact path = "/" component = {Employee1}/>
      <Route path = "/Librarian" component = {Employee1}/>
      <Route exact path = "/Search" component = {Customer}/>
      <Route exact path = "/Add" component = {AddItems}/>
      <Route exact path = "/Delete" component = {DeleteItems}/>

      </Switch>
      </div>
    </Router>
  );
}

export default App;