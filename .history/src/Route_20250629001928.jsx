import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeSection from './Pages/Home/HomeSection';
import AboutUs from './Pages/About/About';
import Services from './Pages/Services/Services';
import WhyUs from './Pages/WhyUs/WhyUs';
import ContactSection from './Pages/Contact/Contact';




// import SupplyChainManagement from './Pages/Services/SupplyChainManagement';
// import ProcurementServices from './Pages/Services/ProcurementServices';
// import VendorManagement from './Pages/Services/VendorManagement';
// import LogisticsSolutions from './Pages/Services/LogisticsSolutions';
// import RiskAssessment from './Pages/Services/RiskAssessment';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeSection />} />
      <Route path="/about" element={<AboutUs />} />
      
      <Route path="/services" element={<Services />} />
      {/* <Route path="/services/supply-chain-management" element={<SupplyChainManagement />} /> */}
      {/* <Route path="/services/procurement-services" element={<ProcurementServices />} /> */}
      {/* <Route path="/services/vendor-management" element={<VendorManagement />} /> */}
      {/* <Route path="/services/logistics-solutions" element={<LogisticsSolutions />} /> */}
      {/* <Route path="/services/risk-assessment" element={<RiskAssessment />} /> */}
      <Route path="/why-us" element={<WhyUs />} />
      <Route path="/contact" element={<ContactSection />} />
      <Route path="*" element={<CatalogBook />} />
    </Routes>
  );
};

export default AppRoutes;