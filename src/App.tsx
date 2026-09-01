import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/layout/Layout";

import Home from "./pages/home/Home";
import AboutPage from "./pages/about/AboutPage";
import FeaturesPage from "./pages/features/FeaturesPage";
import SafetyPage from "./pages/safety/SafetyPage";
import ContactPage from "./pages/contact/ContactPage";
import DriversPage from "./pages/drivers/ForDrivers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import DriverTerms from "./pages/DriverTerms";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/safety" element={<SafetyPage />} />
            <Route path="/drivers" element={<DriversPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/driver-terms" element={<DriverTerms />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
// End of feur/src/App.tsx
