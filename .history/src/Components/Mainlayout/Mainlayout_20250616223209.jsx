import React from 'react';
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';


const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
     <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;