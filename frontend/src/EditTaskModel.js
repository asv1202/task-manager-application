import React, { useState } from 'react';
import './EditTaskModel.css';

function EditTaskModal({ task, onSave, onClose }) {
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');

  const handleSave = () => {
    onSave({ ...task, title, description });
  };

  if (!task) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Task</h2>
        <div className="form-group">
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <div className="modal-actions">
          <button className="save-button" onClick={handleSave}>Save</button>
          <button className="cancel-button" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default EditTaskModal;
