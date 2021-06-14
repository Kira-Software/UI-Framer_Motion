import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/b2.png";

import { motion } from "framer-motion";

import { animationTwo,transition } from "../animations";
const About = () => {
  return (
    <motion.div initial="out" animate="in" exit="end" 
    variants={animationTwo} transition={transition}>
      <Header />
      <Hero
        image={Image}
        title="Beautiful Views"
        description="Never seen before"
      />
      About
    </motion.div>
  );
};

export default About;
