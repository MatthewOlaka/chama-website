import React from 'react';
import Modal from 'react-modal';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'; // Install react-icons if you haven't already
import ".././styles.scss"

const SuccessModal = ({ isOpen, onRequestClose, type }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Success Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        { type === 'success' ? 
            <div>
                <AiOutlineCheckCircle size={100} color="green" />
                <h2>{ "Successfully Submitted" }</h2>
            </div>
        :
            <div>
                <AiOutlineCloseCircle size={100} color="#BC0404" />
                <h2>{ "An error occurred. Please try again." }</h2>
            </div>
        }
      </div>
    </Modal>
  );
};

export default SuccessModal;
