import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyles";
import React, { useState } from "react";
import { Outlet, useLocation, useOutlet } from "react-router-dom";
import TransitionBlack from "./animations/transition";


function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        {/* <TransitionBlack key={location.pathname} /> */}
        <motion.div
        key={location.pathname}
          initial={{ y: "-100%"}}
          animate={{ y: "0%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          exit={{ y: "100%" }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default App;
