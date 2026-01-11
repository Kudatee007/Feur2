import Hero from "../../components/hero/Hero";
import aboutImage from "../../assets/images/aboutImage.svg";
import KeyFeatures from "./component/KeyFeatures";
import AndSoMuchMore from "./component/AndSoMuchMore";
import ExperienceFeurCTA from "./component/ExperienceFeurCTA";

const FeaturesPage = () => {
  return (
    <div>
      <Hero
        title="Features That Make Driving Simple"
        subtitle="Discover why thousands of car owners across Africa trust Feur for their professional driving needs."
        image={aboutImage}
      />

      <KeyFeatures />
      <AndSoMuchMore />
      <ExperienceFeurCTA />
    </div>
  );
};

export default FeaturesPage;
