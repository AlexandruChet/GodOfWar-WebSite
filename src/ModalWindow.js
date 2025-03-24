import React from "react";
import "./styles/modal/Modal.scss";

function ModalWindow({ isVisible, toggleModal }) {
    console.log("Modal isVisible:", isVisible);

    return (
        <section className={`modal-window ${isVisible ? "visible" : ""}`}>
            <div className="modal-content">
                <button onClick={toggleModal}>Close Modal</button>
            </div>
        </section>
    );
}

export default ModalWindow;
