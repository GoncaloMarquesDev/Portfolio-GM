import React, { useRef } from "react";

import AboutMe from "../components/aboutme/AboutMe";
import Hero from "../components/hero/Hero";
import Nav from "../components/nav/Nav";
import PortfolioSection from "../components/portfoliosection/PortfolioSection";
import Resume from "../components/resume/Resume";

import "./LandingPage.scss";
import Footer from "../components/footer/Footer";
import CardV2 from "../components/cardv2/CardV2";

function LandingPage() {
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const resumeRef = useRef<HTMLDivElement | null>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <div className="teste">
      <div className="page-wrapper">
        <Nav
          onProjectsClick={() => scrollToRef(portfolioRef)}
          onAboutClick={() => scrollToRef(aboutRef)}
          onResumeClick={() => scrollToRef(resumeRef)}
        />
        <Hero />
        <div ref={aboutRef}>
          <AboutMe />
        </div>
        <div ref={portfolioRef}>
          <PortfolioSection />
        </div>
        <CardV2/>
        <div ref={resumeRef}>
          <Resume />
        </div>
        <Footer
  onProjectsClick={() => scrollToRef(portfolioRef)}
  onAboutClick={() => scrollToRef(aboutRef)}
  onResumeClick={() => scrollToRef(resumeRef)}
/>

      </div>
      </div>
    </>
  );
}

export default LandingPage;
