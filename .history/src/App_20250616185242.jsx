import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './Components/Mainlayout/Mainlayout';

import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import './App.css';
import Routes from './Route';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes/>
        <ScrollToTop />
      </MainLayout>
    </Router>
  );
};

export default App;