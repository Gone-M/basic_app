import React from "react";
import { useSelector } from "react-redux";
import Login from "./Login";
import Dashboard from "./Dashboard";

const App = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  return <div>{isAuthenticated ? <Dashboard /> : <Login />}</div>;
};

export default App;
