import React, { useEffect, useState } from "react";
import "./PasswordForm.css";

const PasswordForm = (props) => {
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (props.editingPassword) {
      setTitle(props.editingPassword.title);
      setPassword(props.editingPassword.password);
    } else {
      setTitle("");
      setPassword("");
    }
  }, [props.editingPassword]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddForm(title, password);
    setTitle("");
    setPassword("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <button type="submit">
          {props.editingPassword ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default PasswordForm;
