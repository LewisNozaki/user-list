import React from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

// This modal is being rendered in the div with id "modal-root".
// This is an example of using ReactDOM's create portal method to tell the DOM
// to render the modal outside of the App div and into it's own div. 

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