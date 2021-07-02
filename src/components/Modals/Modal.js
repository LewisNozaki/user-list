import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ modalMessage, closeModal}) => {
  return (
    <div className={styles["modal-container"]}
      onClick={closeModal}
      >
      <div className={styles["modal-content"]}
            onClick={e => e.stopPropagation()}>
        <h3>
          Invalid Input
        </h3>
        
        <p>
          {modalMessage}
        </p>

        <button 
          type="button"
          onClick={closeModal}
          >
          OK
        </button>
      </div>
    </div>
  )
}

export default Modal;