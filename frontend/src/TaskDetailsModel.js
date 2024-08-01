import React from 'react';
import './TaskDetailsModel.css'

function TaskDetailsModal({ task, onClose }) {
  if (!task) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Task Details</h2>
        <p><strong>Title:</strong> {task.title}</p>
        <p><strong>Description:</strong> {task.description}</p>
        <p><strong>Created at:</strong> {task.createdAt}</p>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default TaskDetailsModal;
