import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.scss";

// Define a mapping of path segments to display names
const breadcrumbNameMap = {
  about: "About Us",
  services: "Services",
  "services/:id": "Service Details", 
  whyus: "Why Us",
  contact: "Contact",
  privacy: "Privacy Policy",
  login: "Login",
  admin: "Admin Dashboard",
  "admin/services-admin": "Services Admin",
  catalogue: "Edit Catalogue",
};

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  // Function to get the display name for a path
  const getDisplayName = (path, index) => {
    // Check if the path matches the dynamic route pattern for services/:id
    if (path.match(/^[0-9a-fA-F-]+$/) && paths[index - 1] === "services") {
      return breadcrumbNameMap["services/:id"];
    }
    // Return the mapped name or fall back to capitalizing the path
    return (
      breadcrumbNameMap[path] || path.charAt(0).toUpperCase() + path.slice(1)
    );
  };

  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link>
      {paths.map((path, index) => {
        const to = "/" + paths.slice(0, index + 1).join("/");
        const name = getDisplayName(path, index);
        return (
          <span key={to}>
            {" > "}
            <Link to={to}>{name}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;