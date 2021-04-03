import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom"
import Customer from './Customer';
import Employee from './Employee';

const Login = () => {

    const[theID, setID] = useState('')
    const[thePassword, setPassword] = useState('')

    const loginUser = () => { //only if customer is found
        console.log("CustomerID: " + theID);
        console.log("Customer Password: " + thePassword);
        
        <Router>
            <Switch>
            <Route path = "/customer" component = {Customer} />
            <Route path = "/" component = {Login} />
            </Switch>
        </Router>
    
        
    }    

    const loginEmployee = () => { //only if employee is found
    
       
    }


    return <div>

        <h1>LOGIN PAGE</h1>
        <div className = "form">
            
            <label>ID: </label>
            <input type = "text" name = "ID" onChange={(e) => {
            setID(e.target.value)
            }}/>
            <label>Password: </label>
            <input type = "text" name = "Password" onChange={(e) => {
            setPassword(e.target.value)
            }}/>
            <button onClick={loginUser}>Customer</button>
            <button onClick={loginEmployee}>Employee</button>
        </div>

    </div>

}

export default Login;