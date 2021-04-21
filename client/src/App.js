import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from './Login';
import Customer from "./Customer";
import Employee1 from "./Employee1";
import AddItems from "./AddItems";
import DeleteItems from "./DeleteItems"
import BookSearch from "./searchResult/Books"
import DvdSearch from "./searchResult/Dvds"
import MgzSearch from "./searchResult/Mgzs"
import AudioBookSearch from "./searchResult/AudioBooks"
import DeviceSearch from "./searchResult/Devices"


function App() {

  return (
    <Router>
      <div className="App"><h1>LIBRARY</h1>
      <Switch>
      <Route exact path = "/" component = {Login }/>
      <Route exact path = "/Librarian" component ={Employee1}/>
      <Route exact path = "/Search" component = {Customer}/>
      <Route exact path = "/Add" component = {AddItems}/>
      <Route exact path = "/Delete" component = {DeleteItems}/>

          <Route exact path="/BookSearch" component={BookSearch} />
          <Route exact path="/DvdSearch" component={DvdSearch} />
          <Route exact path="/MgzSearch" component={MgzSearch} />
          <Route exact path="/AudioBookSearch" component={AudioBookSearch} />
          <Route exact path = "/DeviceSearch" component = {DeviceSearch}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;