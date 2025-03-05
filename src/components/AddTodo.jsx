import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo} from "../app/slices/appSlice";
import toast from "react-hot-toast";
import Topbar from "./Topbar";

const AddTodo = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Low");
    const [dueDate, setDueDate] = useState("");
    const dispatch = useDispatch()
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title,
            description,
            priority,
            dueDate,
            createdAt:new Date().getTime()
        }
        dispatch(addTodo(data))
        toast.success("Todo added.")
       setTitle('')
       setDescription('')
       setPriority('')
       setDueDate('')
       
    }
    
    return (
       <section className="todos-container">
        <Topbar title="Add Todo"/>
         <div className="p-5 my-5">
            
            <form onSubmit={handleSubmit}>
                {/* Task Title */}
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="taskName"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter task name"
                    />
                </div>

                {/* Description */}
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        rows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                {/* Priority Selection */}
                <label htmlFor="priority" className="form-label">Set Priority</label>
                <div className="d-flex gap-5 mb-3">
                    {["Low", "Medium", "High"].map((level) => (
                        <div className="form-check" key={level}>
                            <input
                                className="form-check-input"
                                type="radio"
                                name="priority"
                                id={level.toLowerCase()}
                                value={level}
                                checked={priority === level}
                                onChange={(e) => setPriority(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor={level.toLowerCase()}>
                                {level}
                            </label>
                        </div>
                    ))}
                </div>

                {/* Due Date & Time */}
                <div className="mb-3">
                    <label htmlFor="dueDate" className="form-label">Add Due Date</label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        id="dueDate"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                </div>
                    

                <button type="submit" className="btn btn-primary">Add Todo</button>
            </form>
        </div>
       </section>
    );
};

export default AddTodo;
