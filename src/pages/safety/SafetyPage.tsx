import Hero from "../../components/hero/Hero";
import SafetyFeatures from "./components/SafetyFeatures";
import SafetySection from "./components/SafetySection";
import YourRoleInSafety from "./components/YourRoleInSafety";
import SafetySupportCTA from "./components/SafetySupportCTA";
import { Helmet } from "react-helmet-async";

const SafetyPage = () => {
  return (
    <div>
      <Helmet>
        <title>Safety — Feur</title>
        <meta
          name="description"
          content="Explore safety features and how they protect you with Feur."
        />
        <link rel="canonical" href="https://usefeur.com/safety" />
      </Helmet>
      <Hero
        title="Safety & Trust"
        subtitle="At Feur, your safety isn't just a feature, it's our foundation. We've built a comprehensive safety ecosystem that protects every journey, verifies every driver, and gives you complete peace of mind from the moment you request a driver to when you reach your destination."
        image="/features-safety.jpg"
        backgroundImage="/safetyHeroBg.webp"
      />

      <SafetyFeatures />
      <SafetySection />
      <YourRoleInSafety />
      <SafetySupportCTA />
    </div>
  );
};

export default SafetyPage;
