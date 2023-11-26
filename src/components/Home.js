import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {" "}
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about/team">About - Team</Link>
          </li>
          <li>
            <Link to="/about/history">About - History</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* Add more links for other routes */}
        </ul>
      </nav>
    </div>
  );
}
