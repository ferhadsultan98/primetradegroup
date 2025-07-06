import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next'; // I18nextProvider əlavə edilir
import i18n from 'n'; // i18n.js faylını idxal edin
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
    <I18nextProvider i18n={i18n}> {/* I18nextProvider ilə əhatə edin */}
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout><HomeSection /><ScrollTopBtn /></MainLayout>} />
          <Route path="/about" element={<MainLayout><AboutUs /><ScrollTopBtn /></MainLayout>} />
          <Route path="/services" element={<MainLayout><Services /><ScrollTopBtn /></MainLayout>} />
          <Route path="/why-us" element={<MainLayout><WhyUs /><ScrollTopBtn /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><ContactSection /><ScrollTopBtn /></MainLayout>} />
          <Route path="/catalogue" element={<BookCatalog />} />
          <Route path="*" element={<MainLayout><NotFound /><ScrollTopBtn /></MainLayout>} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
};

export default App;