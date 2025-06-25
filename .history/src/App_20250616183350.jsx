import React from 'react';
import MainLayout from './Components/Mainlayout/Mainlayout';
import './App.css'
import AboutUs from './Pages/About/About';
import HomeSection from './Pages/Home/HomeSection';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';


const App = () => {
  return (
    <MainLayout>
      <HomeSection/>
      <AboutUs/>

      <ScrollToTop/>
    </MainLayout>
  );
};

export default App;