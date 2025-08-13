import React from 'react';

import './MainLayout.scss'
import Header from './Header/Header';
import Footer from './Footer/Footer';

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