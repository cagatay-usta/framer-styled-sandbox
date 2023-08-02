import React from "react";
import Hero from "../components/Hero";
import Image from "../images/bird.jpg";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
   
      <Hero
        image={Image}
        title="Experience Nature"
        description="Once in a lifetime opportunity"
      />
      
    </>
  );
}

export default Home;
