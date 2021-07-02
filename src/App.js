import React from "react";
import AddUserForm from "./components/Users/AddUserForm";
import UserList from "./components/Users/UserList";

const App = () => {
  return (
    <div className="main-container">
      <AddUserForm />
      <UserList />
    </div>
  );
}

export default App;
