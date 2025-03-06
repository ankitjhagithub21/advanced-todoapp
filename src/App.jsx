import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddTodo from "./components/AddTodo";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";
import "./App.css";

const App = () => {
  
  return (
    <BrowserRouter>
      <main>
        <Sidebar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/add"
            element={
              <PrivateRoute>
                <AddTodo />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
