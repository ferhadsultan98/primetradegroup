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
  const [isFlippingForward, setIsFlippingForward] = useState(false);
  const [isFlippingBackward, setIsFlippingBackward] = useState(false);

  const renderPageComponent = (pageId) => {
    switch (pageId) {
      case 1:
        return <CTPageCover />;
      case 2:
        return <CTPageContents />;
      case 3:
        return <CTPageOne />;
      case 4:
        return <CTPageTwo />;
      case 5:
        return <CTPageThree />;
      case 6:
        return <CTPageFour />;
      default:
        return null;
    }
  };

  const handleNextPage = () => {
    if (currentSpread < 4) {
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
      {/* <div className="catalogHeader">
        <h1 className="catalogTitle">Kataloq</h1>
        <div className="catalogSubtitle">Səhifələr</div>
      </div> */}

      <div className="bookContainer">
        <button
          className={`navButton prevButton ${currentSpread === 0 ? 'disabled' : ''}`}
          onClick={handlePrevPage}
          disabled={currentSpread === 0}
        >
          <ChevronLeft size={24} />
        </button>

        <div className="bookWrapper">
          <div className={`bookSpread ${isFlippingForward ? 'flipping-forward' : ''} ${isFlippingBackward ? 'flipping-backward' : ''}`}>
            <div className="bookPage leftPage">
              <div className="pageContent">{renderPageComponent(currentSpread + 1)}</div>
            </div>
            <div className="bookPage rightPage">
              <div className="pageContent">{renderPageComponent(currentSpread + 2)}</div>
            </div>
            {isFlippingForward && currentSpread + 2 < 6 && (
              <>
                <div className="bookPage leftPage flippingPage forward">
                  <div className="pageContent">{renderPageComponent(currentSpread + 1)}</div>
                </div>
                <div className="bookPage rightPage flippingPage forward">
                  <div className="pageContent">{renderPageComponent(currentSpread + 2)}</div>
                </div>
              </>
            )}
            {isFlippingBackward && currentSpread - 2 >= 0 && (
              <>
                <div className="bookPage leftPage flippingPage backward">
                  <div className="pageContent">{renderPageComponent(currentSpread - 2)}</div>
                </div>
                <div className="bookPage rightPage flippingPage backward">
                  <div className="pageContent">{renderPageComponent(currentSpread - 1)}</div>
                </div>
              </>
            )}
          </div>
        </div>

        <button
          className={`navButton nextButton ${currentSpread >= 4 ? 'disabled' : ''}`}
          onClick={handleNextPage}
          disabled={currentSpread >= 4}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default BookCatalog;