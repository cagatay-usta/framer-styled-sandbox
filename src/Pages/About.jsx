import TransitionBlack from "../animations/transition";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/bear.jpg";
import { motion } from "framer-motion";

function About() {
  
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
          title="Beauty of the Nature"
          description="You can find it here"
        />

</motion.div>
    </>
  );
}

export default About;
