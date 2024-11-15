import React from "react";

import "./PasswordTitle.css";

const PasswordTitle = (props)=>{

    

    return (
            <div className="title">

                <h1> Password Keeper</h1>
                <div>
                    <p>Total Passwords : {props.passwordCount}</p>
                </div>
                <div>
                    <label htmlFor="seach">Search : </label>
                    <input type="text" name="search"  id="search"></input>
                </div>
            </div>
        

    );

}

export default PasswordTitle;