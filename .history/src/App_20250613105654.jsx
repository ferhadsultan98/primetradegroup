import React from 'react';
import MainLayout from './Components/Mainlayout/Mainlayout';
import './App.css'
import AboutUs from './Pages/About/About';
import HomeSection from './Pages/Home/HomeSection';


const App = () => {
  return (
    <MainLayout>
      <HomeSection/>
      <AboutUs/>
    </MainLayout>
  );
};

export default App;