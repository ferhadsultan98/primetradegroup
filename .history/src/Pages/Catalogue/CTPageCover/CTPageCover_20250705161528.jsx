import React from 'react';
import './CTPageCover.scss';

const CTPageCover = () => {
  return (
    <div className="CTPageCoverBookCatalog">
      <div className="CTPageCoverCatalogHeader">
        <h1 className="CTPageCoverCatalogTitle">Book Catalog</h1>
        <p className="CTPageCoverCatalogSubtitle">Explore our collection of timeless stories</p>
      </div>
      <div className="CTPageCoverBookContainer">
        <button className="CTPageCoverNavButton CTPageCoverPrevButton" aria-label="Previous page">
          <
        </button>
        <div className="CTPageCoverBookWrapper">
          <div className="CTPageCoverBookSpread">
            <div className="CTPageCoverBookPage CTPageCoverLeftPage">
              <div className="CTPageCoverPageContent" style={{ backgroundImage: 'url(/path/to/left-page-image.jpg)' }}></div>
            </div>
            <div className="CTPageCoverBookPage CTPageCoverRightPage">
              <div className="CTPageCoverPageContent" style={{ backgroundImage: 'url(/path/to/right-page-image.jpg)' }}></div>
            </div>
          </div>
        </div>
        <button className="CTPageCoverNavButton CTPageCoverNextButton" aria-label="Next page">
          >
        </button>
      </div>
    </div>
  );
};

export default CTPageCover;