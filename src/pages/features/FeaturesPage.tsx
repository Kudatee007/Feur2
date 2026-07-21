import Hero from "../../components/hero/Hero";
import KeyFeatures from "./component/KeyFeatures";
import AndSoMuchMore from "./component/AndSoMuchMore";
import ExperienceFeurCTA from "./component/ExperienceFeurCTA";
import { Helmet } from "react-helmet-async";

const FeaturesPage = () => {
  return (
    <div>
      <Helmet>
        <title>Features — Feur</title>
        <meta
          name="description"
          content="Explore the features of Feur and how they can benefit you."
        />
        <link rel="canonical" href="https://usefeur.com/features" />
      </Helmet>
      <Hero
        title="Features That Make Driving Simple"
        subtitle="Discover why thousands of car owners across Africa trust Feur for their professional driving needs."
        image="/featuresImage.webp"
        backgroundImage="/forDrivers.svg"
      />

      <KeyFeatures />
      <AndSoMuchMore />
      <ExperienceFeurCTA />
    </div>
  );
};

export default FeaturesPage;
