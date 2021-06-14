import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/b6.png";

import { motion } from "framer-motion";

import { animationThree,transition } from "../animations";

const Services = () => {
  return (
    <motion.div initial="out" animate="end" exit="out" 
    variants={animationThree}  transition={transition}>
      <Header />
      <Hero
        image={Image}
        title="Look at the bird"
        description="Can you believe this?"
      />
      Services
    </motion.div>
  );
};

export default Services;
