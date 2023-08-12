import React from "react";
import { Link } from "react-router-dom";
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">Dashboard</Link>
      <Link to="/departments">Departments</Link>
      <Link to="/products">Products</Link>
    </div>
  );
};

export default Sidebar;
