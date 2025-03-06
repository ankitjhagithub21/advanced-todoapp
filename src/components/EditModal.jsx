import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrTodo, updateTodo } from '../app/slices/appSlice';

const EditModal = ({ todo }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');

  // Update state when the modal opens with the current todo
  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
      setPriority(todo.priority);
    }
  }, [todo]);

  // Handle save changes
  const handleSave = () => {
    const updatedTodo = { ...todo, title, description, priority };
    dispatch(updateTodo(updatedTodo));
    dispatch(setCurrTodo(null)); // Close modal after updating
  };

  return (
    <div
      className="modal fade show"   
      style={{ display: todo ? 'block' : 'none', backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Edit Todo
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => dispatch(setCurrTodo(null))}
            />
          </div>
          <div className="modal-body">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="form-control mb-2"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <select className="form-control" value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={() => dispatch(setCurrTodo(null))}>
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={handleSave}>
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
