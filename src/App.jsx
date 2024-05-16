import { NavBar } from "./Components/NavBar/NavBar";
import { Hero } from "./Components/Hero/Hero";
import { AboutSection } from "./Components/AboutSection/AboutSection";
import { Skills } from "./Components/Skills/Skills";
import { Portfolio } from "./Components/Portfolio/Portfolio";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { ChatBox } from "./Components/ChatBox/ChatBox.jsx";

export const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutSection />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <ChatBox />
    </>
  );
};
