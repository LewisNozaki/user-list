import React, { useState } from "react";

const AddUserForm = ({ addUser, showModal }) => {
  const [ username, setUsername ] = useState("");
  const [ age, setAge ] = useState("");

  const handleUsernameInputChange = e => setUsername(e.target.value);
  const handleAgeInputChange = e => setAge(e.target.value);
  
  const handleSubmit = e => {
    e.preventDefault();

    if (username === "" || age === "") {
      let message = "Please enter a valid name and age (non-empty value)."
      showModal(message);
      setUsername("");
      setAge("");
      return
    }

    if (age < 0) {
      let message = "Please enter a valid age (> 0)."
      showModal(message);
      setUsername("");
      setAge("");
      return
    }
    
    let newUser = {
      key: Math.random().toString(),
      username: username,
      age: age,
    }
    
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

      <button 
        type="submit"
        className="button-primary"
        >Add
      </button>
    </form>
  )
};

export default AddUserForm;