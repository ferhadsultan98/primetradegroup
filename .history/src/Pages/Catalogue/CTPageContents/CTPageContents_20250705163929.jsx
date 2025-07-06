import React, { useState } from 'react';
import './CTPageContents.scss';

const CTPageContents = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // Sample table of contents data
  const pages = [
    { title: 'Chapter 1: Introduction', image: '/images/page1.jpg' },
    { title: 'Chapter 2: Getting Started', image: '/images/page2.jpg' },
    { title: 'Chapter 3: Advanced Topics', image: '/images/page3.jpg' },
    { title: 'Chapter 4: Conclusion', image: '/images/page4.jpg' },
  ];

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 2);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 2) {
      setCurrentPage(currentPage + 2);
    }
  };

  return (
    <div className="CTPageContentsBookCatalog">
      <div className="CTPageContentsCatalogHeader">
        <h1 className="CTPageContentsCatalogTitle">Table of Contents</h1>
        <p className="CTPageContentsCatalogSubtitle">Explore the chapters of our book</p>
      </div>
      <div className="CTPageContentsBookContainer">
        <button
          className={`CTPageContentsNavButton ${currentPage === 0 ? 'CTPageContentsDisabled' : ''}`}
          onClick={handlePrevPage}
          disabled={currentPage === 0}
        >
          <svg viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <div className="CTPageContentsBookWrapper">
          <div className="CTPageContentsBookSpread">
            <div
              className="CTPageContentsBookPage CTPageContentsLeftPage"
              style={{
                backgroundImage: `url(${pages[currentPage]?.image || ''})`,
              }}
            >
              <div className="CTPageContentsPageContent">
                <h2>{pages[currentPage]?.title || 'No Content'}</h2>
              </div>
            </div>
            <div
              className="CTPageContentsBookPage CTPageContentsRightPage"
              style={{
                backgroundImage: `url(${pages[currentPage + 1]?.image || ''})`,
              }}
            >
              <div className="CTPageContentsPageContent">
                <h2>{pages[currentPage + 1]?.title || 'No Content'}</h2>
              </div>
            </div>
          </div>
        </div>
        <button
          className={`CTPageContentsNavButton ${currentPage >= pages.length - 2 ? 'CTPageContentsDisabled' : ''}`}
          onClick={handleNextPage}
          disabled={currentPage >= pages.length - 2}
        >
          <svg viewBox="0 0 24 24">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CTPageContents;