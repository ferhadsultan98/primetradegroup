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

// Alt xidmət səhifələri (əgər gələcəkdə aktiv ediləcəksə)
// import SupplyChainManagement from './Pages/Services/SupplyChainManagement';
// import ProcurementServices from './Pages/Services/ProcurementServices';
// import VendorManagement from './Pages/Services/VendorManagement';
// import LogisticsSolutions from './Pages/Services/LogisticsSolutions';
// import RiskAssessment from './Pages/Services/RiskAssessment';

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
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          {/* 
          <Route path="/services/supply-chain-management" element={<SupplyChainManagement />} />
          <Route path="/services/procurement-services" element={<ProcurementServices />} />
          <Route path="/services/vendor-management" element={<VendorManagement />} />
          <Route path="/services/logistics-solutions" element={<LogisticsSolutions />} />
          <Route path="/services/risk-assessment" element={<RiskAssessment />} />
          */}

          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollTopBtn />
      </MainLayout>
    </Router>
  );
};

export default App;
