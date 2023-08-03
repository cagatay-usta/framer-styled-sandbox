import React from "react";
import Hero from "../components/Hero";
import Image from "../images/bird.jpg";
import { motion } from "framer-motion";
import TransitionBlack from "../animations/transition";

function Home() {
  return (
    <>

<TransitionBlack key={location.pathname} /> 
   <motion.div
        key={location.pathname}
          initial={{ y: "-100%"}}
          animate={{ y: "0%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          exit={{ y: "100%" }}
        >
      <Hero
        image={Image}
        title="Experience Nature"
        description="Once in a lifetime opportunity"
      />
      </motion.div>
    </>
  );
}

export default Home;
