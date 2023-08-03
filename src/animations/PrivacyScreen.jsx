import { motion, useIsPresent } from "framer-motion"

import React from 'react'

function PrivacyScreen() {

  const isPresent = useIsPresent();


  return (
    <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1]} }}
        exit={{ scaleY: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1]} }}
        style={{ originY: isPresent ? 1 : 0 }}
        className="privacy-screen"
      />
  )
}

export default PrivacyScreen

