import HowItWorks from './components/howItWorks/HowItWorks'
import WhyChooseFeur from './components/WhyChooseFeur/WhyChooseFeur'
import PerfectForEveryOccasion from './components/PerfectForEveryOccasion'
import SafetyFeatures from './components/SafetyFeatures'
import Testimonials from './components/Testimonials'
import DownloadFeur from './components/DownloadFeur'
import Hero from '../../components/hero/Hero'
import homeImage from '../../assets/images/homeImage.svg'
import landingPageHeroBg from '../../assets/images/landingPageHero.svg'


const LandingPage = () => {
  return (
    <div>
      <Hero
        title="Hire a Driver anytime, anywhere!"
        subtitle="Get a driver for your car whenever you need. No contracts, no commitments."
        buttonText="Get the app"
        image={homeImage}
        backgroundImage={landingPageHeroBg}
        onButtonClick={() => {
          // Handle app download
          console.log("Get the app clicked");
        }}
      />
      <HowItWorks />
      <WhyChooseFeur />
      <PerfectForEveryOccasion />
      <SafetyFeatures />
      <Testimonials />
      <DownloadFeur />
    </div>
  )
}

export default LandingPage