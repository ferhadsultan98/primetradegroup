import React from 'react';
import MainLayout from './Components/Mainlayout/Mainlayout';
import './App.css'
import Home from './Pages/Home/Home';
import AboutUs from './Pages/About/About';

const App = () => {
  return (
    <MainLayout>
      <Home/>
      <AboutUs/>
    </MainLayout>
  );
};

export default App;