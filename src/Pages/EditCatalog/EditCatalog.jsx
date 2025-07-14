import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './EditCatalog.scss';

const Catalog = () => {
  const bookRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 360, height: 540 });
  const [currentPage, setCurrentPage] = useState(0);

  // Handle responsive dimensions
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      let newWidth, newHeight;

      if (width <= 600) {
        newWidth = width * 0.81; // Reduced by 10% from 0.9
        newHeight = newWidth * 1.5;
      } else if (width <= 1024) {
        newWidth = width * 0.63; // Reduced by 10% from 0.7
        newHeight = newWidth * 1.5;
      } else {
        newWidth = 360; // Reduced by 10% from 400
        newHeight = 540; // Reduced by 10% from 600
      }

      setDimensions({ width: newWidth, height: newHeight });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const pages = [
    { id: 1, image: 'https://blog-cdn.reedsy.com/directories/gallery/248/large_65b0ae90317f7596d6f95bfdd6131398.jpg' },
    { id: 2, image: 'https://www.writersdigest.com/uploads/MTcxMDY0NzcxMzIzNTY5NDEz/image-placeholder-title.jpg?format=auto&optimize=high&width=1440' },
    { id: 3, image: 'https://blog-cdn.reedsy.com/directories/gallery/248/large_65b0ae90317f7596d6f95bfdd6131398.jpg' },
    { id: 4, image: 'https://www.writersdigest.com/uploads/MTcxMDY0NzcxMzIzNTY5NDEz/image-placeholder-title.jpg?format=auto&optimize=high&width=1440' },
  ];

  const handlePrev = () => {
    if (bookRef.current && currentPage > 0) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  const handleNext = () => {
    if (bookRef.current && currentPage < pages.length * 2 - 2) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  const handleFlip = (e) => {
    setCurrentPage(e.data);
  };

  return (
    <div className="catalog-container">
      <HTMLFlipBook
        width={dimensions.width}
        height={dimensions.height}
        size="stretch"
        minWidth={270} // Reduced by 10% from 300
        maxWidth={540} // Reduced by 10% from 600
        minHeight={405} // Reduced by 10% from 450
        maxHeight={810} // Reduced by 10% from 900
        flippingTime={1000}
        ref={bookRef}
        className="catalog-book"
        onFlip={handleFlip}
      >
        {pages.map((page) => (
          <div key={page.id} className="catalog-page">
            <img src={page.image} alt="Catalog page" />
          </div>
        ))}
      </HTMLFlipBook>
      <div className="catalog-controls">
        <button onClick={handlePrev} disabled={currentPage === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={currentPage >= pages.length * 2 - 2}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Catalog;