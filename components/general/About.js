import React, { useState } from "react";
import ModalVideo from "react-modal-video";

import Image from "next/image";

import aboutBanner from "../../public/assets/images/about-banner.png";
import aboutVector from "../../public/assets/images/about-vector.svg";

import { IoPlay } from "react-icons/io5";
import Modal from "../reusable/Modal";
import VideoModal from "../reusable/VideoModal";

const About = () => {
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <section className="about">
      <div className="container">
        <figure className="about-banner">
          <Image
            src={aboutBanner}
            alt="Eduland students"
            className="about-img"
          />

          <Image
            src={aboutVector}
            alt="Vector line art"
            className="vector-line"
          />

          <button className="play-btn" onClick={openModal}>
            <IoPlay />
            {modal && (
              <VideoModal
                setModal={setModal}
                modal={modal}
                spinner={spinner}
                videoLoading={videoLoading}
              />
            )}
          </button>
          {/* {modalIsOpen && (
            <Modal setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen} />
            // <ModalVideo setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen} />
          )} */}
        </figure>

        <div className="about-content">
          <h2 className="h2 about-title">
            We Help to Create Possibility & Success in Your Career!
          </h2>

          <p className="section-text">
            Continually administrate process-centric human capital rather than
            bleeding-edge methodologies. Distinctively supply accurate methods
            of empowerment before.
          </p>

          <button className="btn btn-primary">Get Started Today</button>
        </div>
      </div>
    </section>
  );
};

export default About;
