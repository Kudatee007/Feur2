import { Helmet } from "react-helmet-async";
import HowItWorks from "./components/howItWorks/HowItWorks";
import WhyChooseFeur from "./components/WhyChooseFeur/WhyChooseFeur";
import PerfectForEveryOccasion from "./components/PerfectForEveryOccasion";
import SafetyFeatures from "./components/SafetyFeatures";
import Testimonials from "./components/Testimonials";
import DownloadFeur from "./components/DownloadFeur";
import Hero from "../../components/hero/Hero";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Feur - Hire a Professional Driver for Your Car</title>
        <meta
          name="description"
          content="Feur connects you with vetted professional drivers who drive your own car. Book instantly or schedule ahead — no contracts, no commitments."
        />
        <meta property="og:title" content="Feur - Hire a Professional Driver for Your Car" />
        <meta
          property="og:description"
          content="Feur connects you with vetted professional drivers who drive your own car. Book instantly or schedule ahead — no contracts, no commitments."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://usefeur.com/" />
        <link rel="canonical" href="https://usefeur.com/" />
      </Helmet>
      <Hero
        title="Hire a Driver anytime, anywhere!"
        subtitle="Get a driver for your car whenever you need. No contracts, no commitments."
        buttonText="Get the app"
        image="/homeImage.svg"
        backgroundImage="/landingPageHero.webp"
        onButtonClick={() => {
          // Handle app download
        }}
      />
      <HowItWorks />
      <WhyChooseFeur />
      <PerfectForEveryOccasion />
      <SafetyFeatures />
      <Testimonials />
      <DownloadFeur />
    </div>
  );
};

export default Home;
