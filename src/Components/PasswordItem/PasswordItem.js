import React from "react";
import "./PasswordItem.css";

const PasswordItem =(props)=>{

    const deleteHandler=(event)=>{
        props.onDelete(props.id);
    }

    const editHandler=(event)=>{

        console.log(event);
        props.onEdit(props.id);
    }

    return (
        <>
            <li>
                {props.title + " " + props.password +" "}
                <button type="click" onClick={deleteHandler}>
                    Delete
                </button>
                <button type="click" onClick={editHandler}>
                    Edit
                </button>
            </li>
        </>
    )
}

export default PasswordItem;