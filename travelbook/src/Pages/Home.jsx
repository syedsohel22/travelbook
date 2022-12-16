import React from "react";
import FeaturedOffers from "../Components/FeaturedOffers";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SerachComponent from "../Components/SerachComponent";
import ThreeCard from "../Components/ThreeCard";
import TodaysTopDeal from "../Components/TodaysTopDeal";
import HereToHelp from "../Components/HereToHelp";
import TravlingAdvaice from "../Components/TravlingAdvaice";
import "../css/homePage.css";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <SerachComponent />
      <ThreeCard />
      <FeaturedOffers />
      <TodaysTopDeal />
      <HereToHelp />
      <TravlingAdvaice />
      <Footer />
    </div>
  );
};

export default Home;
