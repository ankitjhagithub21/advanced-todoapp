import React from 'react';
import { useSelector } from 'react-redux';
import Topbar from './Topbar';
import Todo from './Todo';

const Todos = () => {
    const { todos } = useSelector((state) => state.app);
   

    return (
        <div className="todos-container">
            <div className="d-flex flex-column w-full align-items-stretch flex-shrink-0 ">
                <Topbar title="Your Todos" />
                <div className="list-group list-group-flush border-bottom overflow-auto" style={{ height: "90vh" }}>
                    {todos && todos.length > 0 ? (
                        todos.map((todo) => (
                          <Todo key={todo.id} todo={todo}/>
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
