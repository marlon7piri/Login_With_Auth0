import React from "react";
import { Link } from "react-router-dom";
export default function NavDashboard() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
      </ul>
    </div>
  );
}
