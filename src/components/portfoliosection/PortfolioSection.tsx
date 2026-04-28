import CardV2 from "../cardv2/CardV2";
import project1 from "../../assets/project1_teste.png";
import project2 from "../../assets/project2_teste.png";
import project3 from "../../assets/project3_teste.png";
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
    {
      link: "https://radioo-mocha.vercel.app/",
      image: project3,
      description:
        "A mobile-first web application for discovering and streaming online radio stations worldwide, built with React. The app provides a clean and intuitive interface that allows users to search, explore, and listen to live radio stations in real time. It uses React state and Context API for efficient global state management, ensuring a smooth and consistent user experience. Data is fetched from external APIs, enabling dynamic content and real-time updates. The project also emphasizes responsive design and modern CSS techniques (Flexbox & Grid), delivering a seamless experience across mobile, tablet, and desktop devices. This project highlights a component-based architecture, scalable layout system, and attention to UI/UX details.",
      title: "Online Radio Stations",
      technologies: [
        "React",
        "Vite",
        "JS",
        "SCSS",
        "Typescript",
        "REST API",
        "Flexbox",
      ],
    },
  ];

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

      <section className="portfolio">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card-wrapper"
            /* style={{
              top: `${index * 40}px`, // offset progressivo
              zIndex: index + 1,
            }} */
          >
            <CardV2 {...project} />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Portfolio;
