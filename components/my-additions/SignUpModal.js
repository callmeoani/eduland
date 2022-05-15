import React from "react";
import styles from "../../styles/SignUpModal.module.css";

const SignUpModal = ({ setShowSignUp }) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContent}>
        <div className={styles.cancelButtonContainer}>
          <button
            onClick={() => setShowSignUp(false)}
            className={styles.cancelButton}
          >
            X
          </button>
        </div>
        <div className={styles.modalTitle}>
          Sign up and start to improve in all aspects of your life
        </div>
        <form className={styles.modalForm}>
          <div className={styles.formFields}>
            <label>
              Email: <input type="email" placeholder="callmeoani@gmail.com" />
            </label>
          </div>

          <div className={styles.formFields}>
            <label>
              Password: <input type="password" placeholder="*****" />
            </label>
          </div>
          <button className={styles.button}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
