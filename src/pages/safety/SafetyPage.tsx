import Hero from "../../components/hero/Hero";
import SafetyFeatures from "./components/SafetyFeatures";
import SafetySection from "./components/SafetySection";
import YourRoleInSafety from "./components/YourRoleInSafety";
import SafetySupportCTA from "./components/SafetySupportCTA";

const SafetyPage = () => {
  return (
    <div>
      <Hero
        title="Safety & Trust"
        subtitle="At Feur, your safety isn't just a feature, it's our foundation. We've built a comprehensive safety ecosystem that protects every journey, verifies every driver, and gives you complete peace of mind from the moment you request a driver to when you reach your destination."
        image="/safetmage.webp"
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
