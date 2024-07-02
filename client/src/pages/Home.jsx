import React from "react";
import HeroSection from "../components/HeroSection";
import ContentSection from "../components/ContentSection";
import RolesSection from "../components/RolesSection";
import StatisticSection from "../components/StatisticSection";
import StepsSection from "../components/StepsSection";
import SearchSection from "../components/SearchSection";
import FooterSection from "../components/FooterSection";
import TeamSection from "../components/TeamSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <StatisticSection />
      <SearchSection />
      <RolesSection />
      <StepsSection />
      <ContentSection />
      <TeamSection />

      <FooterSection />
    </div>
  );
};

export default Home;
