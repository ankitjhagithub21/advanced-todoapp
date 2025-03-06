import { useDispatch } from "react-redux";
import { FaEdit, FaTrash, FaCheckCircle, FaRegCircle } from "react-icons/fa"; // Import icons
import { deleteTodo, setCurrTodo, toggleComplete } from '../app/slices/appSlice';
import { format } from 'date-fns';



const Todo = ({ todo }) => {
    const dispatch = useDispatch();
    const formattedDate = format(new Date(todo.dueDate), "EEE, MMM d, yyyy");

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
        if (confirm("Are you sure?")) {
            dispatch(deleteTodo(todoId));
        }
    };

    return (
        <div className="card shadow-sm border-0 rounded-3 mb-3 p-3 bg-light">
            <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">
                    {new Date(todo.id).toLocaleString()}
                </small>
                {/* ✅ Mark as Complete Button */}
                <button
                    className="btn p-0"
                    title={todo.completed ? "Mark as Incomplete" : "Mark as Complete"}
                    onClick={() => dispatch(toggleComplete(todo.id))}
                >
                    {todo.completed ? (
                        <FaCheckCircle className="text-success" size={22} />
                    ) : (
                        <FaRegCircle className="text-secondary" size={22} />
                    )}
                </button>
            </div>

            {/* Task Title */}
            <h5 className={`fw-bold mt-2 ${todo.completed ? "text-decoration-line-through text-muted" : ""}`}>
                {todo.title}
            </h5>

            {/* Priority Badge */}
            <div className="mb-2">
                <span className={getPriorityColor(todo.priority)}>
                    {todo.priority}
                </span>
            </div>

            {/* Description */}
            <p className="text-secondary small mb-2">{todo.description}</p>

            {/* Deadline */}
            <div className="text-danger fw-bold small">
            Task Deadline: {formattedDate}
            </div>

            {/* Actions (Edit & Delete) */}
            <div className="d-flex gap-3 mt-3">
                <button
                    type="button"
                    className="btn btn-outline-primary btn-sm d-flex align-items-center gap-1"
                    onClick={() => dispatch(setCurrTodo(todo))}
                >
                    <FaEdit />
                    Edit
                </button>

                <button
                    className="btn btn-outline-danger btn-sm d-flex align-items-center gap-1"
                    onClick={() => handleDelete(todo.id)}
                >
                    <FaTrash />
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Todo;
