import React from "react";
import { useEffect, useRef } from "react";
import { motion, useCycle } from "framer-motion";

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
// const useDimensions = (ref) => {
//   const dimensions = useRef({ width: 0, height: 0 });

//   useEffect(() => {
//     dimensions.current.width = ref.current.offsetWidth;
//     dimensions.current.height = ref.current.offsetHeight;
//   }, []);

//   return dimensions.current;
// };

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(2200px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function Menu() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  // const containerRef = useRef(null);
  // const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={1000}
      onClick={() => toggleOpen()}
    >
      <motion.div className="background" variants={sidebar} />
      {/* <Navigation />
      <MenuToggle toggle={() => toggleOpen()} /> */}
    </motion.nav>
  );
}

export default Menu;
