import React, { useState }  from "react";
import PasswordTitle from "./Components/PasswordTitle/PasswordTitle";
import PasswordForm from "./Components/PasswordForm/PasswordForm";
import PasswordLists from "./Components/PasswordLists/PasswordLists";

function App() {

  const [passwords,setPasswords] = useState([]);
  
  const [editingPassword,setEditingPassword] = useState(null);


  const formSubmitHandler = (title,password)=>{
    if (editingPassword) {
      
      setPasswords((prev) =>
        prev.map((item) =>
          item.id === editingPassword.id ? { ...item, title, password } : item
        )
      );
      setEditingPassword(false);
    } else {
        setPasswords((prev) => [
        ...prev,
        { title, password, id: Math.random().toString() },
      ]);
    }
  }

  const deleteHandler= (id)=>{
    setPasswords((prev)=>{
      return [...prev].filter((password)=>{
        return password.id !==id; 
      })
    })

  }

  const editHandler=(id)=>{
    const passwordToEdit = passwords.find((password) => password.id === id);
    setEditingPassword(passwordToEdit);
  }



  return (
    <>
      <PasswordTitle passwordCount ={passwords.length}/>
      <PasswordForm onAddForm={formSubmitHandler}
                    editingPassword={editingPassword} 
      />
      <PasswordLists passwords={passwords} 
                      onEdit={editHandler} 
                      onDelete={deleteHandler}
      />
    </>
  );
}

export default App;
