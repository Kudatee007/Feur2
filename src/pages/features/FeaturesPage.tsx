import Hero from "../../components/hero/Hero";
import featuresImage from "../../assets/images/featuresImage.svg";
import KeyFeatures from "./component/KeyFeatures";
import AndSoMuchMore from "./component/AndSoMuchMore";
import ExperienceFeurCTA from "./component/ExperienceFeurCTA";
import featuresHeroBg from "../../assets/images/featureHeroBg.svg";

const FeaturesPage = () => {
  return (
    <div>
      <Hero
        title="Features That Make Driving Simple"
        subtitle="Discover why thousands of car owners across Africa trust Feur for their professional driving needs."
        image={featuresImage}
        backgroundImage={featuresHeroBg}
      />

      <KeyFeatures />
      <AndSoMuchMore />
      <ExperienceFeurCTA />
    </div>
  );
};

export default FeaturesPage;
