import React, { useState } from 'react';
import './PrimeAdmin.scss';
import { FaTachometerAlt, FaUsers, FaChartBar, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PrimeAdmin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="adminPanelContainer">
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebarHeader">
          <h2 className="sidebarTitle">Admin Panel</h2>
          <button className="toggleButton" onClick={toggleSidebar}>
            <FaCog />
          </button>
        </div>
        <nav className="sidebarNav">
          <ul>
            <Link to='services-admin' className="navItem">
              <FaTachometerAlt className="navIcon" />
              <span className="navText">Services</span>
            </Link>
            <li className="navItem">
              <FaUsers className="navIcon" />
              <span className="navText">Users</span>
            </li>
            <li className="navItem">
              <FaChartBar className="navIcon" />
              <span className="navText">Analytics</span>
            </li>
            <li className="navItem">
              <FaCog className="navIcon" />
              <span className="navText">Settings</span>
            </li>
            <li className="navItem logout">
              <FaSignOutAlt className="navIcon" />
              <span className="navText">Logout</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mainContent">
        <header className="header">
          <h1 className="headerTitle">Dashboard</h1>
        </header>
        <div className="contentWrapper">
          <div className="contentCard">
            <h2 className="cardTitle">Welcome to Admin Panel</h2>
            <p className="cardText">
              This is the main content area. Select an option from the sidebar to view different sections.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimeAdmin;