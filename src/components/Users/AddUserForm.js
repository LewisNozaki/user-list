import React, { useState } from "react";

const AddUserForm = () => {
  const [ username, setUsername ] = useState("");

  const handleInputChange = e => setUsername(e.target.value);
  
  const handleSubmit = e => {
    e.preventDefault();

    console.log(username);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">username:</label>
      <input 
        id="username"
        name="username"
        type="text" 
        onChange={handleInputChange} 
      />
      <button type="submit">Add</button>
    </form>
  )
};

export default AddUserForm;