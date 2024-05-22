import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ModalComponent = ({ isOpen, onRequestClose, details }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Details</h2>
        {details && (
          <div>
            <p><strong>Name:</strong> {details.name}</p>
            <p><strong>Email:</strong> {details.email}</p>
            <p><strong>ID:</strong> {details.studentId}</p>
            {details.faculty && <p><strong>Faculty:</strong> {details.faculty}</p>}
            {details.department && <p><strong>Department:</strong> {details.department}</p>}
            {details.advisor && <p><strong>Advisor:</strong> {details.advisor}</p>}
          </div>
        )}
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={onRequestClose}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ModalComponent;
