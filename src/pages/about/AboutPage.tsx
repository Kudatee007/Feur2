import Hero from "../../components/hero/Hero";
import aboutImage from "../../assets/images/aboutImage.svg";
import OurStory from "./components/OurStory";
import WhatDrivesUs from "./components/WhatDrivesUs";
import MeetTheTeam from "./components/MeetTheTeam";
import JoinFeur from "./components/JoinFeur";
import aboutHeroBg from "../../assets/images/aboutUsHeroBg.svg";

const AboutPage = () => {
  return (
    <div>
      <Hero
        title="Redefining Mobility"
        subtitle="We're not just connecting car owners with drivers, we're building the future of safe, flexible, and reliable transportation across the continent."
        image={aboutImage}
        backgroundImage={aboutHeroBg}
      />
      <OurStory />
      <WhatDrivesUs />
      <MeetTheTeam />
      <JoinFeur />
    </div>
  );
};

export default AboutPage;
