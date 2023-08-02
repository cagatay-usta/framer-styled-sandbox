import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/bear.jpg";
import { motion } from "framer-motion";

function About() {
  
  return (
    <>
     
      
        <Hero
          image={Image}
          title="Beauty of the Nature"
          description="You can find it here"
        />
    </>
  );
}

export default About;
