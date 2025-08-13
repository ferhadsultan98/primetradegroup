import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./Languages/i18n";
import MainLayout from "./Components/Mainlayout/Mainlayout";
import ScrollTopBtn from "./Components/ScrollTopBtn/ScrollTopBtn";
import "./App.css";

// Pages
import HomeSection from "./Pages/Home/HomeSection";
import AboutUs from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import ServiceDetails from "./Pages/Services/ServiceDetails/ServiceDetails";
import WhyUs from "./Pages/WhyUs/WhyUs";
import ContactSection from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";
import EditCatalog from "./Pages/EditCatalog/EditCatalog";
import PolicyContent from "./Pages/PolicyContent/PolicyContent";
import Login from "./Admin/Login/Login";
import ServicesAdmin from "./Admin/ServicesAdmin/ServicesAdmin";
import PrimeAdmin from "./Admin/PrimeAdmin";
// import PrimeAdmin from "./Admin/PrimeAdmin";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <HomeSection />
                <ScrollTopBtn />
              </MainLayout>
            }
          />
          <Route
            path="/about"
            element={
              <MainLayout>
                <AboutUs />
                <ScrollTopBtn />
              </MainLayout>
            }
          />
          <Route
            path="/activity"
            element={
              <MainLayout>
                <Services />
                <ScrollTopBtn />
              </MainLayout>
            }
          />
          <Route
            path="/services/:id"
            element={
              <MainLayout>
                <React.Suspense fallback={<div>Loading...</div>}>
                  <ServiceDetails />
                </React.Suspense>
                <ScrollTopBtn />
              </MainLayout>
            }
          />
          <Route
            path="/why-us"
            element={
              <MainLayout>
                <WhyUs />
                <ScrollTopBtn />
              </MainLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <MainLayout>
                <ContactSection />
                <ScrollTopBtn />
              </MainLayout>
            }
          />
          <Route
            path="/privacy"
            element={
              <MainLayout>
                <PolicyContent />
                <ScrollTopBtn />
              </MainLayout>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<PrimeAdmin />} />
          <Route path="admin/services-admin" element={<ServicesAdmin />} />
          <Route path="/catalogue" element={<EditCatalog />} />
          {/* <Route path="/admin" element={<PrimeAdmin />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
};

export default App;
