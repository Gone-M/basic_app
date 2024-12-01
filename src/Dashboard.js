import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./actions";

const Dashboard = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const dispatch = useDispatch();

  if (!isAuthenticated) {
    return <h2>Please log in to access the dashboard</h2>;
  }

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    alert("Logged out successfully");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the protected dashboard!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
