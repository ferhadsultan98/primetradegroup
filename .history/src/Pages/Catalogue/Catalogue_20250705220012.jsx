import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Catalogue.scss';
import CTPageCover from './CTPageCover/CTPageCover';
import CTPageContents from './CTPageContents/CTPageContents';
import CTPageOne from './CTPageOne/CTPageOne';
import CTPageTwo from './CTPageTwo/CTPageTwo';
import CTPageThree from './CTPageThree/CTPageThree';
import CTPageFour from './CTPageFour/CTPageFour';

const BookCatalog = () => {
  const [currentSpread, setCurrentSpread] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const pages = [
    <CTPageCover />,
    <CTPageContents />,
    <CTPageOne />,
    <CTPageTwo />,
    <CTPageThree />,
    <CTPageFour />,
  ];

  const handleNextPage = () => {
    if (currentSpread < pages.length - 2 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentSpread(currentSpread + 2);
        setIsFlipping(false);
      }, 800);
    }
  };

  const handlePrevPage = () => {
    if (currentSpread > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentSpread(currentSpread - 2);
        setIsFlipping(false);
      }, 800);
    }
  };

  return (
    <div className="bookCatalog">
      <div className="bookContainer">
        <button
          className={`navButton prevButton ${currentSpread === 0 || isFlipping ? 'disabled' : ''}`}
          onClick={handlePrevPage}
          disabled={currentSpread === 0 || isFlipping}
        >
          <ChevronLeft size={24} />
        </button>

        <div className="bookWrapper">
          <div className={`bookSpread ${isFlipping ? 'flipping' : ''}`}>
            <div className="bookPage leftPage">
              <div className="pageContent">{pages[currentSpread]}</div>
            </div>
            <div className="bookPage rightPage">
              <div className="pageContent">{pages[currentSpread + 1]}</div>
            </div>
            {isFlipping && currentSpread + 2 < pages.length && (
              <div className="bookPage rightPage flippingPage forward">
                <div className="pageContent front">{pages[currentSpread + 2]}</div>
                <div className="pageContent back">{pages[currentSpread + 1]}</div>
              </div>
            )}
            {isFlipping && currentSpread > 0 && (
              <div className="bookPage leftPage flippingPage backward">
                <div className="pageContent front">{pages[currentSpread - 2]}</div>
                <div className="pageContent back">{pages[currentSpread - 1]}</div>
              </div>
            )}
          </div>
        </div>

        <button
          className={`navButton nextButton ${currentSpread >= pages.length - 2 || isFlipping ? 'disabled' : ''}`}
          onClick={handleNextPage}
          disabled={currentSpread >= pages.length - 2 || isFlipping}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default BookCatalog;