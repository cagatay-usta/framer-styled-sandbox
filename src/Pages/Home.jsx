import React from "react";
import Hero from "../components/Hero";
import Image from "../images/bird.jpg";
import { motion } from "framer-motion";
import TransitionBlack from "../animations/transition";
import Menu from "../components/Menu";

function Home() {
  return (
    <>


      <Hero
        image={Image}
        title="Experience Nature"
        description="Once in a lifetime opportunity"
      />
      <Menu />
    </>
  );
}

export default Home;
