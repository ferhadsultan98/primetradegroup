import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './Components/Mainlayout/Mainlayout';
import AppRoutes from './Routes';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import './App.css';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <AppRoutes />
        <ScrollToTop />
      </MainLayout>
    </Router>
  );
};

export default App;