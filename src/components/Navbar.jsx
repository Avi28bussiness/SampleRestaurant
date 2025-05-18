import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">🍽️ MyRestaurant</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto">
          {/* Starters Dropdown */}
          <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle text-white btn btn-link"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Starters
            </button>
            <ul className="dropdown-menu bg-black">
              <li><Link className="dropdown-item text-white" to="/menu/starters/all">All</Link></li>
              <li><Link className="dropdown-item text-white" to="/menu/starters/veg">Veg</Link></li>
              <li><Link className="dropdown-item text-white" to="/menu/starters/non-veg">Non-Veg</Link></li>
            </ul>
          </li>

          {/* Main Courses Dropdown */}
          <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle text-white btn btn-link"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Main Courses
            </button>
            <ul className="dropdown-menu bg-black">
              <li><Link className="dropdown-item text-white" to="/menu/main/all">All</Link></li>
              <li><Link className="dropdown-item text-white" to="/menu/main/veg">Veg</Link></li>
              <li><Link className="dropdown-item text-white" to="/menu/main/non-veg">Non-Veg</Link></li>
            </ul>
          </li>

          {/* Chinese Dropdown */}
          <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle text-white btn btn-link"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Chinese
            </button>
            <ul className="dropdown-menu bg-black">
              <li><Link className="dropdown-item text-white" to="/menu/chinese/all">All</Link></li>
              <li><Link className="dropdown-item text-white" to="/menu/chinese/veg">Veg</Link></li>
              <li><Link className="dropdown-item text-white" to="/menu/chinese/non-veg">Non-Veg</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
