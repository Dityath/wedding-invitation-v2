import React from "react";
import { motion } from "framer-motion";

function Switch({ isOn, ...props }) {
  const className = `switch ${isOn ? "on" : "off"}`;

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 10 }}
      className="containerSwitch"
    >
      <p>Play Music:</p>
      <motion.div className={className} {...props}>
        <motion.div layout transition={{ type: "spring", duration: 0.5 }} />
      </motion.div>
    </motion.div>
  );
}

export default Switch;
