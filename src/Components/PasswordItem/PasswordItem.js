import React from "react";
import "./PasswordItem.css";

const PasswordItem =(props)=>{
    return (
        <>
            <li>
                {props.title + " " + props.password +" "}
                <button type="click">
                    Delete
                </button>
                <button type="click">
                    Edit
                </button>
            </li>
        </>
    )
}

export default PasswordItem;