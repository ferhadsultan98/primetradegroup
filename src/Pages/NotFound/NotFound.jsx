import React from 'react';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="notFoundContainer">
      <div className="notFoundHeader">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <a href="/" className="backHomeLink">Return to Home</a>
      </div>
    </div>
  );
};

export default NotFound;