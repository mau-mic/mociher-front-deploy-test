import React from "react";
import successIcon from "../assets/icons/bx-check-circle.svg";
import errorIcon from "../assets/icons/bx-error-circle.svg";
import "./ModalInfo.css";

const ModalInfo = ({ message, showModal, setShowModal, isSuccess }) => {
  return (
    <div className={`modal ${showModal ? "active" : ""}`}>
      <div className="modal-card">
      <span className="close" onClick={() => setShowModal(false)}>
        &times;
      </span>
      <div className="modal-content">
        <img
          src={isSuccess ? successIcon : errorIcon}
          alt="menu-icon"
          className="modal-status-icon"
        />
        <h2>{isSuccess ? "Se envió su solicitud" : "Error en la solicitud"}</h2>
        <p>{message}</p>
      </div>
      </div>
    </div>
  );
};

export default ModalInfo;