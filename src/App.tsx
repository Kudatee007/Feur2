import LandingPage from "./pages/home/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import AboutPage from './pages/about/AboutPage';
import FeaturesPage from './pages/features/FeaturesPage';
// import DriversPage from './pages/drivers/DriversPage';
// import SafetyPage from './pages/safety/SafetyPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/features" element={<FeaturesPage />} />
          {/* <Route path="/drivers" element={<DriversPage />} />
          <Route path="/safety" element={<SafetyPage />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
