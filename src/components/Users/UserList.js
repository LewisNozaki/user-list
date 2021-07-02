import React from "react";
import User from "./User"

const UserList = ({ userList }) => {
  return (
    <ul>
      {userList.map(user => {
        return (
          <User 
            key={user.key}
            username={user.username}
            age={user.age}
          />
        )
      })}
    </ul>
  )
}

export default UserList;