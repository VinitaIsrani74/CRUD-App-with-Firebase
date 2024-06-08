import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      
      <Link to="/" style={{textDecoration: "none"}}>
        <div className="home-link">Home</div>
      </Link>
     

      
      <button onClick={() => navigate("/add")} className="add-user-btn">Add User</button>
    </div>
  );
};

export default Navbar;
