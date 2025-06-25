import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './Components/Mainlayout/Mainlayout';
import ScrollTopBtn from './Components/ScrollToTop/ScrollToTop';
import './App.css';
import AppRoutes from './Route';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <AppRoutes/>
        <ScrollToTop />
      </MainLayout>
    </Router>
  );
};

export default App;