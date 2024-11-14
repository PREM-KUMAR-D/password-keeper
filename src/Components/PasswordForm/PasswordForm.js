import React from "react";
import "./PasswordForm.css";

const PasswordForm = ()=>{
    return (
        <form>  

            <div>
                <label htmlFor="title">Title : </label>
                <input type="text" id="title" name="title"></input>
            </div>

            <div>
                <label htmlFor="password">Password : </label>
                <input type="text" id="password" name="password"></input>
            </div>

            <div>
                <button type="submit"> Add</button>
            </div>
        </form>
    )

}

export default PasswordForm;