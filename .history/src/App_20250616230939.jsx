import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './Components/Mainlayout/Mainlayout';

import './App.css';
import AppRoutes from './Route';
import ScrollTopBtn from './Components/ScrollTopBtn/ScrollTopBtn';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <AppRoutes/>
        <ScrollTopBtn />
      </MainLayout>
    </Router>
  );
};

export default App;