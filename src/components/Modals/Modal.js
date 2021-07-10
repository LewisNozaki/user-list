import React from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

const Content = ({ modalMessage, closeModal }) => {
  return (
    <div 
      className={styles["modal-container"]}
      onClick={closeModal}
      >
      <div className={styles["modal-content"]}
            onClick={e => e.stopPropagation()}>
        <h3>
          {modalMessage[0]}
        </h3>
        
        <p>
          {modalMessage[1]}
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
};

const Modal = ({ modalMessage, closeModal }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Content 
          modalMessage={modalMessage}
          closeModal={closeModal}
        />,
        document.getElementById("modal-root")
        )}
    </>
  )
}

export default Modal;