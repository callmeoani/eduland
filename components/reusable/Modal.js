import React from "react";
import ModalVideo from "react-modal-video";

import styles from "../../styles/Modal.module.css";

const Modal = ({ setModalIsOpen, modalIsOpen }) => {
  return (
    <div className={styles.modalBackground}>
      {/* <div className="overall-container">
        <div>
          <button
            onClick={() => setModalIsOpen(false)}
            className={styles.closeButton}
          >
            Close video
          </button>
        </div>
        <div className={styles.modalContainer}>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={modalIsOpen}
            videoId="L61p2uyiMSo"
            onClose={() => setModalIsOpen(false)}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Modal;
