import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './Components/Mainlayout/Mainlayout';
import './App.css';
import AppRoutes from './Route';
import ScrollTopBtn from './Components/ScrollTopBtn/ScrollTopBtn';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <Router>
      <ScrollToTop /> 
      <MainLayout>
        <AppRoutes />
        <ScrollTopBtn />
      </MainLayout>
      <Route path="/test" element={<CatalogBook />} />
    </Router>
  );
};

export default App;