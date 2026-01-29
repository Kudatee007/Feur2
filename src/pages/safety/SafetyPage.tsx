import Hero from "../../components/hero/Hero";
import safeImage from "../../assets/images/safetmage.svg";
import SafetyFeatures from "./components/SafetyFeatures";
import SafetySection from "./components/SafetySection";
import YourRoleInSafety from "./components/YourRoleInSafety";
import SafetySupportCTA from "./components/SafetySupportCTA";
import safetyHeroBg from "../../assets/images/safetyHeroBg.svg";

const SafetyPage = () => {
  return (
    <div>
      <Hero
        title="Safety & Trust"
        subtitle="At Feur, your safety isn't just a feature, it's our foundation. We've built a comprehensive safety ecosystem that protects every journey, verifies every driver, and gives you complete peace of mind from the moment you request a driver to when you reach your destination."
        image={safeImage}
        backgroundImage={safetyHeroBg}
      />

      <SafetyFeatures />
      <SafetySection />
      <YourRoleInSafety />
      <SafetySupportCTA />
    </div>
  );
};

export default SafetyPage;
