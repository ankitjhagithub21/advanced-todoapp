import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../app/slices/appSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy user data (you can replace it with API authentication)
    const dummyUser = { username: "admin", password: "password" };

    if (username === dummyUser.username && password === dummyUser.password) {
      dispatch(setUser({ username })); // Save user in Redux state
      navigate("/"); // Redirect to home page
    } else {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <section className="form-container d-flex align-items-center justify-content-center">
     <div className="col-md-6 mx-auto shadow rounded-5 p-4">
     <h2 className="fs-3 mb-3">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <div className="d-flex flex-wrap gap-2 mt-5">
      <p> <b>username </b>: admin</p>
      <p><b>password</b> : password</p>
      </div>
     </div>
    </section>
  );
};

export default Login;
