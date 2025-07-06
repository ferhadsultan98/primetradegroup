import React, { useState } from 'react';
import './Catalogue.scss';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const BookCatalog = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    { id: 1, image: 'path/to/image1.jpg', text: 'Page 1 Content' },
    { id: 2, image: 'path/to/image2.jpg', text: 'Page 2 Content' },
    { id: 3, image: 'path/to/image3.jpg', text: 'Page 3 Content' },
    { id: 4, image: 'path/to/image4.jpg', text: 'Page 4 Content' },
    { id: 5, image: 'path/to/image5.jpg', text: 'Page 5 Content' },
    { id: 6, image: 'path/to/image6.jpg', text: 'Page 6 Content' },
    { id: 7, image: 'path/to/image7.jpg', text: 'Page 7 Content' },
    { id: 8, image: 'path/to/image8.jpg', text: 'Page 8 Content' },
    { id: 9, image: 'path/to/image9.jpg', text: 'Page 9 Content' },
    { id: 10, image: 'path/to/image10.jpg', text: 'Page 10 Content' },
  ];

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bookCatalog">
      <div className="book">
        <div className={`page leftPage ${currentPage === 0 ? 'hidden' : ''}`}>
          {currentPage > 0 && (
            <>
              <img src={pages[currentPage - 1].image} alt="Left page" className="pageImage" />
              <div className="pageContent">{pages[currentPage - 1].text}</div>
            </>
          )}
        </div>
        <div className={`page rightPage ${currentPage === pages.length - 1 ? 'lastPage' : ''}`}>
          <img src={pages[currentPage].image} alt="Right page" className="pageImage" />
          <div className="pageContent">{pages[currentPage].text}</div>
        </div>
        <div className="controls">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            className="controlButton"
            aria-label="Previous page"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === pages.length - 1}
            className="controlButton"
            aria-label="Next page"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCatalog;