import React, { useState } from "react";

const AddUserForm = ({ addUser }) => {
  const [ username, setUsername ] = useState("");
  const [ age, setAge ] = useState("");
  
  const handleUsernameInputChange = e => setUsername(e.target.value);
  const handleAgeInputChange = e => setAge(e.target.value);
  
  const handleSubmit = e => {
    e.preventDefault();

    let newUser = {
      key: Math.random().toString(),
      username: username,
      age: age,
    }

    console.log("AddUserForm: ", newUser);

    addUser(newUser);

    setUsername("");
    setAge("");
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">username:</label>
        <input 
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={handleUsernameInputChange} 
        />
      </div>
      <div>
        <label htmlFor="age">age (years):</label>
        <input
          id="age"
          name="age" 
          type="number"
          value={age}
          onChange={handleAgeInputChange}
        />
      </div>

      <button type="submit">Add</button>
    </form>
  )
};

export default AddUserForm;