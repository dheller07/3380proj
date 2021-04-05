import React, { useState } from "react";

const Login = () => {

    
    const[theID, setID] = useState('')
    const[thePassword, setPassword] = useState('')


    const loginUser = () => { //only if customer is found
        console.log("CustomerID: " + theID);
        console.log("Customer Password: " + thePassword);
        
        window.location.href = "/Search";
    }    

    const loginEmployee = () => { //only if employee is found
        console.log("CustomerID: " + theID);
        console.log("Customer Password: " + thePassword);
        
        window.location.href = "/Employee";
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
            <button onClick={loginUser} className = "btn btn-primary">Customer</button>
            <button onClick={loginEmployee}>Employee</button>
        </div>

    </div>

}

export default Login;