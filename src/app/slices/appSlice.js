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
      state.todos = state.todos.filter((todo) => todo.createdAt !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
});

export const { setUser, logoutUser, setTodos, addTodo, setIsOpen, deleteTodo, setCurrTodo } = appSlice.actions;
export default appSlice.reducer;
