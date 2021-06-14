import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/b.png";
import { motion } from "framer-motion";

import { animationOne, transition } from "../animations";
import Cards from "../components/cards";
import Cardmaterial from "../components/Cardmaterial";
import Cardmaterial2 from "../components/Cardmaterial2";
import Sidedrawar from "../components/Sidedrawar";


const Home = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <Header />
      <Hero
        image={Image}
        title="Experience Nature"
        description="Once in a lifetime"
      />
    

      {/* <Cards title="Starter" price="$8.99" description="100 Transactions" />
      <Cards title="Gold" price="$29.99" description="100 Transactions" />
      <Cards
        title="Diamond"
        price="$99.99"
        description="Unlimited Transactions"
      /> */}

      {/* <br></br>
      <Cardmaterial />
      <Cardmaterial />
      <Cardmaterial />

      <br></br>
      <Cardmaterial2 />
      <Cardmaterial2 />
      <Cardmaterial2 /> */}

      {/* <Sidedrawar /> */}
    </motion.div>
  );
};

export default Home;
