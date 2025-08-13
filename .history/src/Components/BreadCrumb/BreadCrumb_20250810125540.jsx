import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.scss";

// Define a mapping of path segments to display names, including the root
const breadcrumbNameMap = {
  "": "Ana Səhifə", // Custom name for the root route (/)
  about: "Haqqımızda",
  services: "Fəaliyyət Sahələrimiz",
  whyus: "Nə üçün biz?",
  contact: "Contact",
  privacy: "Privacy Policy",
  login: "Login",
  admin: "Admin Dashboard",
  "admin/services-admin": "Services Admin",
  catalogue: "Edit Catalogue",
};

// Service ID to title mapping from JSON data
const serviceTitleMap = {
  cleaning: "Təmizlik Məhsulları",
  furniture: "Mebel",
  household: "Məişət Avadanlıqları",
  it_equipment: "İnformasiya Texnologiyaları Avadanlıqları",
  office_supplies: "Ofis Ləvazimatları",
  plumbing: "Santexnika",
  workwear: "İş Geyimləri",
};

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  // Function to get the display name for a path
  const getDisplayName = (path, index) => {
    // Check if the path matches the dynamic route pattern for services/:id
    if (index > 0 && paths[index - 1] === "services") {
      return serviceTitleMap[path] || "Service Details"; // Use service title or fallback
    }
    // Return the mapped name or fall back to capitalizing the path
    return (
      breadcrumbNameMap[path] || path.charAt(0).toUpperCase() + path.slice(1)
    );
  };

  return (
    <div className="breadcrumb">
      <Link to="/">{breadcrumbNameMap[""]}</Link>
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