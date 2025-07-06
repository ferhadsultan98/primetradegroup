import React, { useState } from 'react';
import './styles.scss';

const products = [
  { name: 'Multi-Surface Cleaner', desc: 'Cleans all surfaces.', features: ['Non-toxic', '500ml'], price: '$9.99' },
  { name: 'Glass Cleaner', desc: 'Streak-free glass.', features: ['400ml', 'Safe'], price: '$7.49' },
  { name: 'Floor Detergent', desc: 'Cleans floors.', features: ['1L', 'Pet-safe'], price: '$12.99' },
];

const Catalog = () => {
  const [pages, setPages] = useState({ page1: 'right', page2: 'right', page3: 'right', page4: 'right' });

  const flipPage = (id) => {
    setPages(prev => ({
      ...prev,
      [id]: prev[id] === 'right' ? 'left' : 'right'
    }));
  };

  return (
    <div className="bookWrapper">
      <div className="bookBg">
        <div className="pageBg centerClass">
          <div className="pageWrapper">
            <div id="page4" className={`page ${pages.page4}`}>
              <div className="pageFace front" onClick={() => flipPage('page4')}>
                <h1>Multi-Surface Cleaner</h1>
                <div className="pageFoldRight"></div>
              </div>
              <div className="pageFace back">
                <h1>{products[0].desc}</h1>
                <ul>{products[0].features.map((f, i) => <li key={i}>{f}</li>)}</ul>
                <p>{products[0].price}</p>
                <div className="pageFoldLeft"></div>
              </div>
            </div>
            <div id="page3" className={`page ${pages.page3}`}>
              <div className="pageFace front" onClick={() => flipPage('page3')}>
                <h1>Glass Cleaner</h1>
                <div className="pageFoldRight"></div>
              </div>
              <div className="pageFace back">
                <h1>{products[1].desc}</h1>
                <ul>{products[1].features.map((f, i) => <li key={i}>{f}</li>)}</ul>
                <p>{products[1].price}</p>
                <div className="pageFoldLeft"></div>
              </div>
            </div>
            <div id="page2" className={`page ${pages.page2}`}>
              <div className="pageFace front" onClick={() => flipPage('page2')}>
                <h1>Floor Detergent</h1>
                <div className="pageFoldRight"></div>
              </div>
              <div className="pageFace back">
                <h1>{products[2].desc}</h1>
                <ul>{products[2].features.map((f, i) => <li key={i}>{f}</li>)}</ul>
                <p>{products[2].price}</p>
                <div className="pageFoldLeft"></div>
              </div>
            </div>
            <div id="page1" className={`page ${pages.page1}`}>
              <div className="pageFace front" onClick={() => flipPage('page1')}>
                <h1>Cleaning Catalog</h1>
                <p>July 2025</p>
                <div className="pageFoldRight"></div>
              </div>
              <div className="pageFace back">
                <h1>Contents</h1>
                <ul>{products.map((p, i) => <li key={i}>{p.name}</li>)}</ul>
                <div className="pageFoldLeft"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;