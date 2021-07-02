import React from "react";
import User from "./User"

const UserList = ({ userList }) => {
  return (
    <div>
      {userList.map(user => {
        return (
          <User 
            key={user.key}
            username={user.username}
            age={user.age}
          />
        )
      })}
    </div>
  )
}

export default UserList;