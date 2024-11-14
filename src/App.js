import React, { useEffect, useState }  from "react";
import PasswordTitle from "./Components/PasswordTitle/PasswordTitle";
import PasswordForm from "./Components/PasswordForm/PasswordForm";
import PasswordLists from "./Components/PasswordLists/PasswordLists";

function App() {

  const [passwords,setPasswords] = useState([]);
  const [passwordCount ,setPasswordCount] = useState(0);

  useEffect(()=>{
    setPasswordCount((prev)=>prev+1);
  },[passwords])


  const formSubmitHandler = (title,password)=>{
    setPasswords((prev)=>{
      return [...prev,{
        title:title,
        password: password,
        id: Math.random().toString(),
      }]
    })
    
  }

  const deleteHandler= (id)=>{
    setPasswords((prev)=>{
      return [...prev].filter((password)=>{
        return password.id !==id; 
      })
    })

  }

  const editHandler=(id)=>{
    setPasswords((prev)=>{
      return [...prev].filter((password)=>{
        return password.id !==id; 
      })
    })
  }



  return (
    <>
      <PasswordTitle passwordCount ={passwordCount}/>
      <PasswordForm onAddForm={formSubmitHandler} />
      <PasswordLists passwords={passwords} onEdit={editHandler} onDelete={deleteHandler}/>
    </>
  );
}

export default App;
