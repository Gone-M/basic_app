import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./actions";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Mock JWT Authentication
    if (username === "admin" && password === "admin") {
      const mockToken = "mock-jwt-token";
      dispatch(loginSuccess(mockToken));
      localStorage.setItem("token", mockToken);
      alert("Login Successful");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
