import React, { useState, useRef } from "react";

const AddUserForm = ({ addUser, showModal, isDisabled }) => {
  // refs
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  
  // state
  const [ username, setUsername ] = useState("");
  const [ age, setAge ] = useState("");

  const handleUsernameInputChange = e => setUsername(e.target.value);
  const handleAgeInputChange = e => setAge(e.target.value);
  
  const handleSubmit = e => {
    e.preventDefault();

    // This is using the useRef() declared above. We set the value of the "current" object to a variable. 
    // We could use state for this but, this is an example of how to save the stored input data using useRef() instead. 
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName === "" || enteredAge === "") {
      let message = [
        "Invalid Input",
        "Please enter a valid name and age (non-empty value)."
      ];
      showModal(message);
      setUsername("");
      setAge("");
      return
    }

    if (enteredAge < 0) {
      let message = [
        "Invalid Age", 
        "Please enter a valid age ( > 0 )."
      ];
      showModal(message);
      setUsername("");
      setAge("");
      return
    }
    
    let newUser = {
      key: Math.random().toString(),
      username: enteredName,
      age: enteredAge,
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
          autoComplete="off"
          ref={nameInputRef}
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
          ref={ageInputRef}
        />
      </div>

      <button 
        type="submit"
        className="button-primary"
        disabled={isDisabled}
        >Add
      </button>
    </form>
  )
};

export default AddUserForm;