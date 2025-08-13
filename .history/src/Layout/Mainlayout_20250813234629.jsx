import React from 'react';

import './MainLayout.scss'

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
     <main className='mainLayout'>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;