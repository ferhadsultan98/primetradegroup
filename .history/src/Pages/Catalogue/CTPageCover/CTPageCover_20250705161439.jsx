import React from 'react';
import './CTPageCover.scss';

const CTPageCover = () => {
  return (
    <div className="bookCatalog">
      <div className="catalogHeader">
        <h1 className="catalogTitle">Book Catalog</h1>
        <p className="catalogSubtitle">Explore our collection of timeless stories</p>
      </div>
      <div className="bookContainer">
        <button className="navButton prevButton" aria-label="Previous page">
          &lt;
        </button>
        <div className="bookWrapper">
          <div className="bookSpread">
            <div className="bookPage leftPage">
              <div className="pageContent" style={{ backgroundImage: 'url(/path/to/left-page-image.jpg)' }}></div>
            </div>
            <div className="bookPage rightPage">
              <div className="pageContent" style={{ backgroundImage: 'url(/path/to/right-page-image.jpg)' }}></div>
            </div>
          </div>
        </div>
        <button className="navButton nextButton" aria-label="Next page">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CTPageCover;