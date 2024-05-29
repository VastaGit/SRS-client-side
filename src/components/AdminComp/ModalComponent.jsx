import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ModalComponent = ({ isOpen, onRequestClose, details, type  }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">{type.charAt(0).toUpperCase() + type.slice(1)} Details</h2>
        {type === "advisor" && (
          <div>
            <p><strong>ID:</strong> {details.advisorId}</p>
            <p><strong>Name:</strong> {details.professor.firstName} {details.professor.lastName}</p>
            <p><strong>Department ID:</strong> {details.professor.departmentId}</p>
            {/* Add more advisor-specific details here */}
          </div>
        )}
        {type === "student" && (
          <div>
            <p><strong>ID:</strong> {details.studentId}</p>
            <p><strong>Name:</strong> {details.firstName} {details.lastName}</p>
            <p><strong>Department ID:</strong> {details.departmentId}</p>
            <p><strong>Advisor ID:</strong> {details.advisorId}</p>
            {/* Add more student-specific details here */}
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
