import React, { useState } from "react";
import AddUserForm from "./components/Users/AddUserForm";
import UserList from "./components/Users/UserList";

const App = () => {
  const [ userList, setUserList ] = useState([]);

  const handleAddUser = newUser => {
    setUserList(prevState => {
      return [...prevState, newUser]
    })
  }

  return (
    <>
    <div className="main-banner">
      <h1>User List Application</h1>
    </div>

    <div className="main-container">
      <AddUserForm 
        addUser={handleAddUser}
      />
      <UserList 
        userList={userList}
      />
    </div>
    </>
  );
}

export default App;
