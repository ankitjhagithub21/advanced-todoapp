import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [],
  isOpen: false,
  currTodo: null
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
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
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.createdAt === action.payload.createdAt ? action.payload : todo
      );
      localStorage.setItem('todos', JSON.stringify(state.todos));
    }
  }
});

export const { setTodos, addTodo, setIsOpen, deleteTodo, setCurrTodo, updateTodo } = appSlice.actions;
export default appSlice.reducer;
