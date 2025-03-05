import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Topbar from './Topbar';
import { FaEdit, FaTrash } from "react-icons/fa"; // Import icons
import { deleteTodo } from '../app/slices/appSlice';

const Todos = () => {
    const { todos } = useSelector((state) => state.app);



    const dispatch = useDispatch()
    // Function to get priority color
    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'High':
                return 'badge bg-danger';
            case 'Medium':
                return 'badge bg-warning text-dark';
            case 'Low':
                return 'badge bg-success';
            default:
                return 'badge bg-secondary';
        }
    };

    const handleDelete = (todoId) => {
        if(confirm("Are you sure?")){
            dispatch(deleteTodo(todoId))
        }
    }


    return (
        <div className="todos-container">
            <div className="d-flex flex-column w-full align-items-stretch flex-shrink-0 ">
                <Topbar title="Your Todos" />
                <div className="list-group list-group-flush border-bottom overflow-auto" style={{ height: "90vh" }}>
                    {todos && todos.length > 0 ? (
                        todos.map((todo) => (
                            <div key={todo.createdAt} className="list-group-item list-group-item-action py-3 lh-sm">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <strong className="mb-1">{todo.title}</strong>
                                    <small className="text-body-secondary">
                                        {new Date(todo.createdAt).toLocaleString()}
                                    </small>
                                </div>

                                {/* Priority Badge */}
                                <div className="mb-2">
                                    <span className={getPriorityColor(todo.priority)}>
                                        {todo.priority}
                                    </span>
                                </div>

                                {/* Description */}
                                <div className="col-10 mb-1 small">{todo.description}</div>

                                {/* Actions (Edit & Delete) */}
                                <div className="d-flex gap-3 mt-2">
                                    <Link to={`/edit/${todo.id}`} className="btn btn-sm btn-primary">
                                        <FaEdit /> Edit
                                    </Link>
                                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(todo.createdAt)}>
                                        <FaTrash /> Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center py-3">No todos available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Todos;
