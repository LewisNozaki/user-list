import React, { useState } from "react";
import AddUserForm from "./components/Users/AddUserForm";
import UserList from "./components/Users/UserList";
import Modal from "./components/Modals/Modal";

const App = () => {
  const [ userList, setUserList ] = useState([]);
  const [ isValid, setIsValid ] = useState(true);
  const [ modalMessage, setModalMessage ] = useState("");
  
  const handleAddUser = newUser => {
    setUserList(prevState => {
      return [...prevState, newUser]
    })

    setIsValid(true);
  }

  const handleValidation = message => {
    setIsValid(false);
    setModalMessage(message);
  }

  return (
    <>
    <div className="main-banner">
      <h1>User List Application</h1>
    </div>

    <div className="main-container">
      <AddUserForm 
        addUser={handleAddUser}
        showModal={handleValidation}
      />
      <UserList 
        userList={userList}
      />
    </div>

    {
      !isValid && 
      <Modal />
    }
    </>
  );
}

export default App;
