import React from 'react';
import './CTPageContents.scss';

const CTPageContents = () => {
  const contents = [
    { page: 4, title: "Introduction" },
    { page: 8, title: "Market Analysis" },
    { page: 12, title: "Our Methodology" },
    { page: 18, title: "Case Studies" },
    { page: 24, title: "Innovation" },
    { page: 30, title: "Team" },
    { page: 36, title: "Global Reach" },
    { page: 42, title: "Conclusion" }
  ];

  return (
    <div className="CTPageContents">
      <div className="CTPageContentsContainer">
        <div className="CTPageContentsHeader">
          <h1>Table of Contents</h1>
        </div>
        <div className="CTPageContentsList">
          {contents.map((item, index) => (
            <div key={index} className="CTPageContentsItem">
              <span className="CTPageContentsItemPage">{item.page}</span>
              <span className="CTPageContentsItemTitle">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CTPageContents;