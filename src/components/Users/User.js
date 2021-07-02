import React from "react";
import styles from "./User.module.css";

const User = ({ username, age }) => {
  return (
    <li
      className={styles["user-list-item"]}>
      {`${username} (${age})`}
    </li>
  )
}

export default User;