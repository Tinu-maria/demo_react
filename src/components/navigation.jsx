import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-info bg-info">
        <div className="container">
          <NavLink className="navbar-brand" to="/home">
            Welcome
          </NavLink>
          <div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/student">
                  Add Student
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/studentlist">
                  List Student
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;