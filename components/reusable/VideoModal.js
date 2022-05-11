import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { ImSpinner9 } from "react-icons/im";

import styles from "../../styles/VideoModal.module.css";

const VideoModal = ({ setModal, modal, spinner, videoLoading }) => {
  return (
    <section className={styles.modalBackground}>
      <div className={styles.modalAlign}>
        <div className={styles.modalContent} modal={modal}>
          <IoCloseOutline
            className={styles.modalClose}
            arial-label="close modal"
            onClick={setModal}
          />
          <div className={styles.modalVideoAlign}>
            {videoLoading && (
              <div className={styles.modalSpinner}>
                <ImSpinner9 className="modalSpinnerStyle" fadeIn="none" />
              </div>
            )}
            <iframe
              className={styles.modalVideoStyle}
              onLoad={spinner}
              loading="lazy"
              width="800"
              height="500"
              src="https://www.youtube.com/embed/oYWXJQvlGnk"
              title="youtube video player"
              frameBoarder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoModal;

// <iframe
//   width="853"
//   height="480"
//   src="https://www.youtube.com/embed/oYWXJQvlGnk"
//   title="YouTube video player"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//   allowfullscreen
// ></iframe>;
