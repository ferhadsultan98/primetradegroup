import React from "react";
import "./SectionHeader.scss";
import Breadcrumb from "../BreadCrumb/BreadCrumb";


const SectionHeader = ({ label, title, description, centered = true, breadcrumbItems }) => {
  return (
    <div className={`sectionHeader ${centered ? "centered" : ""}`}>
      <span className="headerLabel">{label}</span>
      <h2 className="headerTitle">{title}</h2>
      {description && <p className="headerDescription">{description}</p>}
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
};

export default SectionHeader;