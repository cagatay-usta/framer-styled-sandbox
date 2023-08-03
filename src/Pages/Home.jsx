import React from "react";
import Hero from "../components/Hero";
import Image from "../images/bird.jpg";
import { motion } from "framer-motion";
import TransitionBlack from "../animations/transition";
import Menu from "../components/Menu";
import PrivacyScreen from "../animations/PrivacyScreen";

function Home() {
  return (
    <>


      <Hero
        image={Image}
        title="Experience Nature"
        description="Once in a lifetime opportunity"
      />
      <Menu />
      <PrivacyScreen />
    </>
  );
}

export default Home;
