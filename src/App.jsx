import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AddTodo from "./components/AddTodo"
import Sidebar from "./components/Sidebar"
import "./App.css"
import EditModal from "./components/EditModal"
import { useSelector } from "react-redux"


const App = () => {
  const {currTodo} = useSelector(state=>state.app)
  return (
    <BrowserRouter>
      <main>
        {
           currTodo && <EditModal todo={currTodo}/>
        }
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTodo />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App