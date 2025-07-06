import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeSection from './Pages/Home/HomeSection';
import AboutUs from '../Pages/About/About';
import Services from '../Pages/Services/Services';
import WhyUs from '../Pages/WhyUs/WhyUs';
import ContactSection from '../Pages/Contact/Contact';
import NotFound from '../Pages/NotFound/NotFound';
import ScrollTopBtn from '../Components/ScrollTopBtn/ScrollTopBtn';
import MainLayout from './Components/Mainlayout/Mainlayout';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes with MainLayout */}
      <Route
        element={
          <MainLayout>
            <ScrollTopBtn />
          </MainLayout>
        }
      >
        <Route path="/" element={<HomeSection />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/why-us" element={<WhyUs />} />
      </Route>

      {/* Routes without MainLayout */}
      <Route path="/contact" element={<ContactSection />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;