import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Catalogue.scss';

const BookCatalog = () => {
  const [currentSpread, setCurrentSpread] = useState(0);
  const [isFlippingForward, setIsFlippingForward] = useState(false);
  const [isFlippingBackward, setIsFlippingBackward] = useState(false);

  const pages = [
    { id: 1, image: '/assets/catalog/cover.png' },
    { id: 2, image: '/assets/catalog/ct2.jpg' },
    { id: 3, image: '/assets/catalog/ct3.jpg' },
    { id: 4, image: '/assets/catalog/ct4.jpg' },
    { id: 5, image: '/assets/catalog/ct5.jpg' },
    { id: 6, image: '/assets/catalog/ct6.jpg' },
  ];

  // Function to render the appropriate page component based on page ID
  const renderPageComponent = (pageId) => {
    switch (pageId) {
      case 1:
        return <CTPage />;
      case 2:
        return <Page2 />;
      case 3:
        return <Page3 />;
      case 4:
        return <Page4 />;
      case 5:
        return <Page5 />;
      case 6:
        return <Page6 />;
      default:
        return null;
    }
  };

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
        <button
          className={`navButton prevButton ${currentSpread === 0 ? 'disabled' : ''}`}
          onClick={handlePrevPage}
          disabled={currentSpread === 0}
        >
          <ChevronLeft size={24} />
        </button>

        <div className="bookWrapper">
          <div className={`bookSpread ${isFlippingForward ? 'flipping-forward' : ''} ${isFlippingBackward ? 'flipping-backward' : ''}`}>
            <div className="bookPage leftPage" style={{ backgroundImage: `url(${pages[currentSpread].image})` }}>
              <div className="pageContent">{renderPageComponent(pages[currentSpread].id)}</div>
            </div>
            <div className="bookPage rightPage" style={{ backgroundImage: `url(${pages[currentSpread + 1].image})` }}>
              <div className="pageContent">{renderPageComponent(pages[currentSpread + 1].id)}</div>
            </div>
            {isFlippingForward && currentSpread + 2 < pages.length && (
              <>
                <div className="bookPage leftPage flippingPage forward" style={{ backgroundImage: `url(${pages[currentSpread + 1].image})` }}>
                  <div className="pageContent">{renderPageComponent(pages[currentSpread + 1].id)}</div>
                </div>
                <div className="bookPage rightPage flippingPage forward" style={{ backgroundImage: `url(${pages[currentSpread + 2].image})` }}>
                  <div className="pageContent">{renderPageComponent(pages[currentSpread + 2].id)}</div>
                </div>
              </>
            )}
            {isFlippingBackward && currentSpread - 2 >= 0 && (
              <>
                <div className="bookPage leftPage flippingPage backward" style={{ backgroundImage: `url(${pages[currentSpread - 2].image})` }}>
                  <div className="pageContent">{renderPageComponent(pages[currentSpread - 2].id)}</div>
                </div>
                <div className="bookPage rightPage flippingPage backward" style={{ backgroundImage: `url(${pages[currentSpread - 1].image})` }}>
                  <div className="pageContent">{renderPageComponent(pages[currentSpread - 1].id)}</div>
                </div>
              </>
            )}
          </div>
        </div>

        <button
          className={`navButton nextButton ${currentSpread >= pages.length - 2 ? 'disabled' : ''}`}
          onClick={handleNextPage}
          disabled={currentSpread >= pages.length - 2}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default BookCatalog;