import { useEffect, useRef, useState } from "react";
import CardV2 from "../cardv2/CardV2";
import project1 from "../../assets/project1_teste.png";
import project2 from "../../assets/project2_teste.png";
import "./PortfolioSection.scss";

function Portfolio() {
  const projects = [
    {
      link: "https://e-commerce-project-five-olive.vercel.app/",
      image: project1,
      description:
        "Developed an e-commerce web application as the final project of my Front-End Engineering course, using React and TypeScript. The project focused on integrating a RESTful products API into a custom design created in Figma, ensuring a responsive and user-friendly interface.",
      title: "E-Commerce",
      technologies: ["React", "Vite", "Typescript", "SCSS", "REST API"],
    },
    {
      link: "https://imtv-in-react.vercel.app/movieslist",
      image: project2,
      description:
        "Developed a movie database web application as the final project of the React module, using React with Vite. The project implements multiple React features, including Hooks, React Router, and Context to manage a light/dark theme. It integrates with the TMDB REST API to fetch and display dynamic movie data in an interactive and responsive interface.",
      title: "Movies Database",
      technologies: ["React", "Vite", "JS", "SCSS", "REST API"],
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const secondCardRef = useRef<HTMLDivElement>(null);

  // Estado para controlar se o segundo card está fixo (lock)
  const [isSecondFixed, setIsSecondFixed] = useState(false);
  // Estado para controlar se o container está "lockado"
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (
        !containerRef.current ||
        !firstCardRef.current ||
        !secondCardRef.current
      )
        return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const firstRect = firstCardRef.current.getBoundingClientRect();
      /* const secondRect = secondCardRef.current.getBoundingClientRect(); */

      // Quando o topo do container passou o topo viewport
      // E o segundo card ainda não passou o topo do container menos a altura do primeiro card
      const startLockPoint = 0;
      const endLockPoint = firstRect.height;

      // scroll offset do container em relação ao topo da viewport
      const scrollOffset = -containerRect.top;

      if (scrollOffset >= startLockPoint && scrollOffset < endLockPoint) {
        // Lock ativo
        setIsLocked(true);
        setIsSecondFixed(true);
      } else if (scrollOffset >= endLockPoint) {
        // Passou do lock - scroll normal
        setIsLocked(false);
        setIsSecondFixed(false);
      } else {
        // Antes do lock
        setIsLocked(false);
        setIsSecondFixed(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="info-text">
      <div className="header">
        <div className="header-title">
          <hr className="section-line" />
          <p className="selected-works"> Selected Works</p>
        </div>

        <div className="works-text">
          Here you’ll find some of my work — a showcase of what I’ve created so
          far.
        </div>
      </div>

      <section
        className="portfolio"
        ref={containerRef}
        style={{
          position: "relative",
          height:
            isLocked && firstCardRef.current
              ? firstCardRef.current.offsetHeight * 2
              : "auto",
          // altura do container dobra para manter o lock enquanto o segundo card sobe
        }}
      >
        <div
          ref={firstCardRef}
          className="sticky-card-wrapper"
          style={{
            position: "sticky",
            top: 0,
            zIndex: 5,
            background: "white",
          }}
        >
          <CardV2 {...projects[0]} />
        </div>

        <div
          ref={secondCardRef}
          className={isSecondFixed ? "sticky-second-card" : ""}
          style={{
            position: isSecondFixed ? "sticky" : "relative",
            top: isSecondFixed ? 0 : "auto",
            zIndex: 10,
            background: "white",
          }}
        >
          <CardV2 {...projects[1]} />
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
