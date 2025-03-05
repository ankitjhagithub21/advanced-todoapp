import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AddTodo from "./components/AddTodo"
import Sidebar from "./components/Sidebar"
import "./App.css"


const App = () => {
  return (
    <BrowserRouter>
      <main>
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