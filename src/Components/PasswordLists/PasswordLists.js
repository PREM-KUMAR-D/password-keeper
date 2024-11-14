import React from "react";
import "./PasswordLists.css";
import PasswordItem from "../PasswordItem/PasswordItem";

const PasswordLists =()=>{
    return (
        <div>
            <h3>
               All Passwords 
            </h3>
            <ul>
                <PasswordItem/>
            </ul>

        </div>
    )

}

export default PasswordLists;