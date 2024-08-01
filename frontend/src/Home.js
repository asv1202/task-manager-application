import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskDetailsModal from './TaskDetailsModel';
import EditTaskModal from './EditTaskModel';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('recent');
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/tasks', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
  }, []);



  const handleLogout = () => {
    console.log('Logged out');
    navigate('/login');
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    setSortOption(event.target.value);
  };

  const handleViewDetails = (task) => {
    setSelectedTask(task);
  };

  const handleEdit = (task) => {
    setSelectedTask(task);
    setIsEditing(true);
  };

  const handleCloseModal = () => {
    setSelectedTask(null);
    setIsEditing(false);
  };

  const handleSave = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    setIsEditing(false);
    setSelectedTask(null);
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (sortOption === 'recent') {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else {
      return new Date(a.createdAt) - new Date(b.createdAt);
    }
  });

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="logo">
          <i className="fas fa-calendar"></i>
        </div>
        <div className="nav-buttons">
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </header>
      <div className="task-controls">
        <button className="add-task-button">Add Task</button>
        <div className="search-sort">
          <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
          <select value={sortOption} onChange={handleSort}>
            <option value="recent">Recent</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
      <div className="task-board">
        <div className="task-column">
          <h2 className="column-title">TODO</h2>
          {sortedTasks.filter(task => task.status === 'TODO').map(task => (
            <div key={task.id} className="task-card">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Created at: {task.createdAt}</p>
              <div className="task-actions">
                <button className="delete-button">Delete</button>
                <button className="edit-button" onClick={() => handleEdit(task)}>Edit</button>
                <button className="view-button" onClick={() => handleViewDetails(task)}>View Details</button>
              </div>
            </div>
          ))}
        </div>
        <div className="task-column">
          <h2 className="column-title">IN PROGRESS</h2>
          {sortedTasks.filter(task => task.status === 'IN PROGRESS').map(task => (
            <div key={task.id} className="task-card">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Created at: {task.createdAt}</p>
              <div className="task-actions">
                <button className="delete-button">Delete</button>
                <button className="edit-button" onClick={() => handleEdit(task)}>Edit</button>
                <button className="view-button" onClick={() => handleViewDetails(task)}>View Details</button>
              </div>
            </div>
          ))}
        </div>
        <div className="task-column">
          <h2 className="column-title">DONE</h2>
          {sortedTasks.filter(task => task.status === 'DONE').map(task => (
            <div key={task.id} className="task-card">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Created at: {task.createdAt}</p>
              <div className="task-actions">
                <button className="delete-button">Delete</button>
                <button className="edit-button" onClick={() => handleEdit(task)}>Edit</button>
                <button className="view-button" onClick={() => handleViewDetails(task)}>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedTask && !isEditing && (
        <TaskDetailsModal task={selectedTask} onClose={handleCloseModal} />
      )}
      {selectedTask && isEditing && (
        <EditTaskModal task={selectedTask} onSave={handleSave} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Home;
