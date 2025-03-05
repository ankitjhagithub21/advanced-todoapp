import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [],
  isOpen:false
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    
    setTodos: (state, action) => {
      state.todos = action.payload
    },
    setIsOpen: (state, action) => {
      state.isOpen = action.payload
    },
    addTodo:(state,action) => {
      state.todos = [...state.todos,action.payload]
      localStorage.setItem('todos',JSON.stringify(state.todos))
    },
    deleteTodo:(state,action) => {
      state.todos = state.todos.filter((todo)=>todo.createdAt != action.payload)
      localStorage.setItem('todos',JSON.stringify(state.todos))
    }
  },
})


export const { setTodos ,addTodo,setIsOpen, deleteTodo} = appSlice.actions

export default appSlice.reducer