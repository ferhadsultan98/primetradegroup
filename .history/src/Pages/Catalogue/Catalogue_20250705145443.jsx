import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Catalogue.scss';

const BookCatalog = () => {
  const [currentSpread, setCurrentSpread] = useState(0);
  const [isFlippingForward, setIsFlippingForward] = useState(false);
  const [isFlippingBackward, setIsFlippingBackward] = useState(false);

  const pages = [
    { id: 1, color: '#f5f7fa' },
    { id: 2, color: '#e3f2fd' },
    { id: 3, color: '#f0e4d7' },
    { id: 4, color: '#d9e6e8' },
    { id: 5, color: '#f4e1e1' },
    { id: 6, color: '#e8f0e4' },
  ];

  const handleNextPage = () => {
    if (currentSpread < pages.length - 2) {
      setIsFlippingForward(true);
      setTimeout(() => {
        setCurrentSpread(currentSpread + 2);
        setIsFlippingForward(false);
      }, 600);
    }
  };

  const handlePrevPage = () => {
    if (currentSpread > 0) {
      setIsFlippingBackward(true);
      setTimeout(() => {
        setCurrentSpread(currentSpread - 2);
        setIsFlippingBackward(false);
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
            className={`navButton prevButton ${currentSpread === 0 ? 'disabled' : ''}`}
            onClick={handlePrevPage}
            disabled={currentSpread === 0}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className={`navButton nextButton ${currentSpread >= pages.length - 2 ? 'disabled' : ''}`}
            onClick={handleNextPage}
            disabled={currentSpread >= pages.length - 2}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="bookWrapper">
          <div className={`bookSpread ${isFlippingForward ? 'flipping-forward' : ''} ${isFlippingBackward ? 'flipping-backward' : ''}`}>
            <div className="bookPage leftPage" style={{ backgroundColor: pages[currentSpread].color }}>
              <div className="pageContent"></div>
            </div>
            <div className="bookPage rightPage" style={{ backgroundColor: pages[currentSpread + 1].color }}>
              <div className="pageContent"></div>
            </div>
            {isFlippingForward && currentSpread + 2 < pages.length && (
              <div className="bookPage rightPage flippingPage forward" style={{ backgroundColor: pages[currentSpread + 2].color }}>
                <div className="pageContent"></div>
              </div>
            )}
            {isFlippingBackward && currentSpread - 1 >= 0 && (
              <div className="bookPage leftPage flippingPage backward" style={{ backgroundColor: pages[currentSpread - 1].color }}>
                <div className="pageContent"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCatalog;