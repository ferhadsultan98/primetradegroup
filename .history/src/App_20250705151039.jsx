import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './Components/Mainlayout/Mainlayout';
import ScrollTopBtn from './Components/ScrollTopBtn/ScrollTopBtn';
import './App.css';

// Pages
import HomeSection from './Pages/Home/HomeSection';
import AboutUs from './Pages/About/About';
import Services from './Pages/Services/Services';
import WhyUs from './Pages/WhyUs/WhyUs';
import ContactSection from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import BookCatalog from './Pages/Catalogue/Catalogue';

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
          <Route path="/contact" element={<ContactSection />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* Route without MainLayout */}
        <Route path="/catalogue" element={<BookCatalog />} />
      </Routes>
    </Router>
  );
};

export default App;