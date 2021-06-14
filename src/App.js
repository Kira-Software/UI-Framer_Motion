import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import {  Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalstyles";
import styled from "styled-components";

const Section = styled.section`
overflow-x: hidden;
`;

function App() {
  let location = useLocation();
  return (
    <Section>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/services" exact component={Services} />
        </Switch>
      </AnimatePresence>
    </Section>
  );
}

export default App;
