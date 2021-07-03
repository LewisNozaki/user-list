import React, { useState } from "react";
import AddUserForm from "./components/Users/AddUserForm";
import UserList from "./components/Users/UserList";
import Modal from "./components/Modals/Modal";

const App = () => {
  const [ userList, setUserList ] = useState([]);
  const [ isValid, setIsValid ] = useState(true);
  const [ modalMessage, setModalMessage ] = useState("");
  const [ disableButton, setDisableButton ] = useState(false);

  const handleAddUser = newUser => {
    setUserList(prevState => {
      return [...prevState, newUser]
    })

    setIsValid(true);
  }

  const handleValidation = message => {
    setIsValid(false);
    setModalMessage(message);
    setDisableButton(true);
  }

  const closeModal = () => {
    setIsValid(true);
    setDisableButton(false);
  }

  return (
    <div className="main-container">
      <div className="main-banner">
        <h1>User List Application</h1>
      </div>

      <div className="main-content">
        <AddUserForm 
          addUser={handleAddUser}
          showModal={handleValidation}
          isDisabled={disableButton}
        />
        <UserList 
          userList={userList}
        />
      </div>

      {
        !isValid && 
        <Modal 
          modalMessage={modalMessage}
          closeModal={closeModal}
        />
      }
    </div>
  );
}

export default App;
