import React, { useState } from 'react';
import './styles.scss';

const products = [
  {
    name: 'Multi-Surface Cleaner',
    image: 'https://via.placeholder.com/300x400?text=Multi-Surface+Cleaner',
    description: 'A powerful cleaner suitable for all surfaces, removing tough stains with ease.',
    features: ['Non-toxic', 'Biodegradable', 'Fresh lemon scent', '500ml bottle'],
    price: '$9.99',
  },
  {
    name: 'Glass Cleaner',
    image: 'https://via.placeholder.com/300x400?text=Glass+Cleaner',
    description: 'Streak-free formula for sparkling clean windows and mirrors.',
    features: ['Ammonia-free', 'Quick-drying', '400ml spray', 'Safe for tinted glass'],
    price: '$7.49',
  },
  {
    name: 'Floor Detergent',
    image: 'https://via.placeholder.com/300x400?text=Floor+Detergent',
    description: 'Deep-cleaning solution for hardwood, tile, and laminate floors.',
    features: ['Concentrated formula', '1L bottle', 'Anti-slip', 'Pet-safe'],
    price: '$12.99',
  },
];

const Catalog = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalSpreads = Math.ceil(products.length / 2) + 1; // +1 for cover/TOC

  const handleNext = () => {
    if (currentPage < totalSpreads - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderCover = () => (
    <div className="bookSpread">
      <div className="bookPage leftPage">
        <div className="pageContent">
          <h1 className="catalogTitle">Cleaning Products Catalog</h1>
          <p className="catalogDate">July 2025</p>
        </div>
      </div>
      <div className="bookPage rightPage">
        <div className="pageContent">
          <h2 className="tocTitle">Table of Contents</h2>
          <ul className="tocList">
            {products.map((product, index) => (
              <li key={index}>
                {product.name} - Page {index + 2}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const renderProductSpread = (spreadIndex) => {
    const productIndex = (spreadIndex - 1) * 2;
    const leftProduct = products[productIndex];
    const rightProduct = products[productIndex + 1];

    return (
      <div className="bookSpread">
        <div className="bookPage leftPage">
          <div className="pageContent">
            {leftProduct && (
              <>
                <img src={leftProduct.image} alt={leftProduct.name} className="productImage" />
                <h2 className="productName">{leftProduct.name}</h2>
                <p className="pageNumber">{productIndex + 2}</p>
              </>
            )}
          </div>
        </div>
        <div className="bookPage rightPage">
          <div className="pageContent">
            {leftProduct ? (
              <>
                <h2 className="productName">{leftProduct.name}</h2>
                <p className="productDescription">{leftProduct.description}</p>
                <ul className="productFeatures">
                  {leftProduct.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <p className="productPrice">{leftProduct.price}</p>
                <p className="pageNumber">{productIndex + 3}</p>
              </>
            ) : rightProduct ? (
              <>
                <h2 className="productName">{rightProduct.name}</h2>
                <p className="productDescription">{rightProduct.description}</p>
                <ul className="productFeatures">
                  {rightProduct.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <p className="productPrice">{rightProduct.price}</p>
                <p className="pageNumber">{productIndex + 3}</p>
              </>
            ) : null}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="catalogContainer">
      <div className={`book ${currentPage > 0 ? 'flipLeft' : ''} ${currentPage < totalSpreads - 1 ? 'flipRight' : ''}`}>
        {currentPage === 0 ? renderCover() : renderProductSpread(currentPage)}
      </div>
      <button
        className="navButton prevButton"
        onClick={handlePrev}
        disabled={currentPage === 0}
      >
        ←
      </button>
      <button
        className="navButton nextButton"
        onClick={handleNext}
        disabled={currentPage === totalSpreads - 1}
      >
        →
      </button>
    </div>
  );
};

export default Catalog;