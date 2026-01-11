import LandingPage from "./pages/home/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import AboutPage from './pages/about/AboutPage';
import FeaturesPage from './pages/features/FeaturesPage';
import SafetyPage from './pages/safety/SafetyPage';
import ContactPage from './pages/contact/ContactPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/features" element={<FeaturesPage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
