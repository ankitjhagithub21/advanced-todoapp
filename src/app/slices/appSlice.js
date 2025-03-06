import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [],
  isOpen: false,
  currTodo: null,
  user: JSON.parse(localStorage.getItem('user')) || null, // Store user data
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload)); // Save user in localStorage
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem('user'); // Remove user from localStorage
    },
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setCurrTodo: (state, action) => {
      state.currTodo = action.payload;
    },
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    toggleComplete: (state, action) => {
     state.todos = state.todos.map((todo)=> todo.id === action.payload ? {...todo, completed: !todo.completed} : todo  )
     localStorage.setItem('todos', JSON.stringify(state.todos));
  }
  }
});

export const {setUser,logoutUser, setTodos, addTodo, setIsOpen, deleteTodo, setCurrTodo, updateTodo,toggleComplete } = appSlice.actions;
export default appSlice.reducer;
