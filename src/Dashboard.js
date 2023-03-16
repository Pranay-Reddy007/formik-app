import React from "react";
import { useHistory } from "react-router-dom";
const Dashboard = () => {
  const history = useHistory();
  const handleSubmit = (values) => {
    // TODO: Handle authentication logic
    // Redirect to another page after authentication
    history.push("/");
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <p>You are logged in!</p>
      <button onClick={handleSubmit}>back</button>
    </div>
  );
};
export default Dashboard;