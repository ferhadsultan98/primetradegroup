import React from 'react';
import './SectionHeader.scss';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <header className="sectionHeader">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
};

export default SectionHeader;