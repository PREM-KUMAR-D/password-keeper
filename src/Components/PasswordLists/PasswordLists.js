import React from "react";
import "./PasswordLists.css";
import PasswordItem from "../PasswordItem/PasswordItem";

const PasswordLists =(props)=>{
    return (
        <div>
            <h3>
               All Passwords 
               
            </h3>
            <ul>
                {props.passwords.map((password)=>{
                    console.log("Password"+ JSON.stringify(password))
                    return (
                        <PasswordItem
                            title={password.title}
                            password= {password.password}
                            key={password.id}
                            onEdit={props.onEdit}
                            onDelete={props.onDelete}
                            id={password.id}
                        />
                    )

                })}

            </ul>

        </div>
    )

}

export default PasswordLists;