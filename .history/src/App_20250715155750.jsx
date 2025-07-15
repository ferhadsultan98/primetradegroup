import React, { useEffect } from "react";
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
import ServiceDetails from "./Pages/Services/ServiceDetails";
import WhyUs from "./Pages/WhyUs/WhyUs";
import ContactSection from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";
import EditCatalog from "./Pages/EditCatalog/EditCatalog";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
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
            path="/services"
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
                <ServiceDetails />
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
          <Route path="/catalogue" element={<EditCatalog />} />
          <Route
            path="*"
            element={
              <MainLayout>
                <NotFound />
                <ScrollTopBtn />
              </MainLayout>
            }
          />
        </Routes>
      </Router>
    </I18nextProvider>
  );
};

export default App;