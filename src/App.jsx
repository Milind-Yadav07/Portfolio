import React from 'react';
import Contact from '@/components/sections/Contact';
import QuoteSection from '@/components/sections/QuoteSection';
import './index.scss';
import HamburgerMenu from '@/components/ui/HamburgerMenu';
import About from '@/components/sections/About';
import Collaboration from '@/components/sections/Collaboration';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import TimelineSection from '@/components/sections/TimelineSection';
import Cursor from '@/components/ui/Cursor';
import Home from '@/components/sections/Home';
import Footer from '@/components/sections/Footer';



const App = () => {
  return (
    <>
      <HamburgerMenu />
      <Cursor />
      <Home />
      <About />
      <Skills />
      <Collaboration />
      <TimelineSection />
      <Projects />
      <QuoteSection />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
