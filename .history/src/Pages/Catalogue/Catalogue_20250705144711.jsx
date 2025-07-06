import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Catalogue.scss';

const BookCatalog = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const pages = [
    { id: 1, color: '#f5f7fa' },
    { id: 2, color: '#e3f2fd' },
    { id: 3, color: '#f0e4d7' },
    { id: 4, color: '#d9e6e8' },
    { id: 5, color: '#f4e1e1' },
    { id: 6, color: '#e8f0e4' },
  ];

  const handleNextPage = () => {
    if (currentPage < pages.length - 2) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 2);
        setIsFlipping(false);
      }, 600);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 2);
        setIsFlipping(false);
      }, 600);
    }
  };

  const handlePageClick = (pageIndex) => {
    if (pageIndex % 2 !== 0) pageIndex--;
    if (pageIndex !== currentPage) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(pageIndex);
        setIsFlipping(false);
      }, 600);
    }
  };

  return (
    <div className="bookCatalog">
      <div className="catalogHeader">
        <h1 className="catalogTitle">Kataloq</h1>
        <div className="catalogSubtitle">Səhifələr</div>
      </div>

      <div className="bookContainer">
        <div className="navigationArrows">
          <button 
            className={`navButton prevButton ${currentPage === 0 ? 'disabled' : ''}`}
            onClick={handlePrevPage}
            disabled={currentPage === 0}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            className={`navButton nextButton ${currentPage >= pages.length - 2 ? 'disabled' : ''}`}
            onClick={handleNextPage}
            disabled={currentPage >= pages.length - 2}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="bookWrapper">
          <div className={`bookSpread ${isFlipping ? 'flipping' : ''}`}>
            <div className="bookPage leftPage" style={{ backgroundColor: pages[currentPage].color }}></div>
            <div className="bookPage rightPage" style={{ backgroundColor: pages[currentPage + 1].color }}></div>
          </div>
        </div>
      </div>

      <div className="pagination">
        <div className="pageIndicators">
          {pages.map((_, index) => (
            <button
              key={index}
              className={`pageIndicator ${index === currentPage || index === currentPage + 1 ? 'active' : ''}`}
              onClick={() => handlePageClick(index)}
            >
              <span className="pageNumber">{index + 1}</span>
            </button>
          ))}
        </div>
        <div className="pageInfo">
          <span className="currentPageText">
            Səhifə {currentPage + 1}-{currentPage + 2} / {pages.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookCatalog;