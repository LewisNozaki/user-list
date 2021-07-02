import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ modalMessage, acknowledgeModal}) => {
  return (
    <div className={styles["modal-container"]}
      onClick={acknowledgeModal}
      >
      <div className={styles["modal-content"]}>
        <h3>
          Invalid Input
        </h3>

        <p>
          {modalMessage}
        </p>

        <button 
          type="button"
          onClick={acknowledgeModal}
          >
          OK
        </button>
      </div>
    </div>
  )
}

export default Modal;