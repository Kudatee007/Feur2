import React from "react";
import Navbar from "./Navbar";
import bgImg from "../../assets/images/ImageWithFallback.svg";
import homeImage from "../../assets/images/homeImage.svg";
import { CiMobile2 } from "react-icons/ci";

const Header = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section
        className="text-center flex flex-col lg:flex-row items-center justify-center py-20 px-4 sm:px-8 lg:px-22 gap-8
             bg-cover bg-center bg-no-repeat bg-[#2F414F] min-h-[91vh]"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="space-y-6 flex flex-col items-center lg:items-start lg:max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-[80px] text-white font-bold lg:text-start leading-10 sm:leading-[60px] lg:leading-[90px]">
            Hire a Driver anytime, anywhere!
          </h1>
          <p className="text-white text-lg sm:text-2xl lg:text-[40px] font-normal lg:text-start">
            Get a driver for your car whenever you need. No contracts, no
            commitments.
          </p>
          <button className="text-white bg-[#3894A3] h-14 rounded-full flex items-center justify-center gap-2 w-full max-w-[338px]">
            <CiMobile2 className="text-white w-[22px] h-[26px]" />
            <span>Get the app</span>
          </button>
        </div>
        <img src={homeImage} alt="" className="pt-6 w-[340px] sm:w-[584px] sm:h-96" />
      </section>
    </div>
  );
};

export default Header;
