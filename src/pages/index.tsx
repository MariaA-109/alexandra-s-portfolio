import { NextPage } from "next";
import LayoutMain from "../../components/@essentials/Layouts/LayoutMain";
import Navbar from "../../components/@essentials/Layouts/LayoutMain/Header";
import Hero from "../../components/Portfolio/HeroSection";
import Projects from "../../components/Portfolio/Projects";
import Skills from "../../components/Portfolio/Skills";
import About from "../../components/Portfolio/About";
import Footer from "../../components/Portfolio/Footer";

const Home: NextPage = () => {
  return (
    <LayoutMain>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </LayoutMain>
  );
};

export default Home;
