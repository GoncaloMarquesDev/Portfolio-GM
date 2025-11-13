import Card from "../card/Card";
/* import CardTest from "../cardtest/CardTest"; */
import "./PortfolioSection.scss";
import project1 from "../../assets/project1_teste.png";
import project2 from "../../assets/project2_teste.png";

function Portfolio() {
  return (
    <div className="info-text">
      <div className="header">
        <div className="header-title">
          {" "}
          <hr className="section-line" />
          <p className="selected-works"> Selected Works</p>
        </div>

        <div className="works-text">
          Here you’ll find some of my work — a showcase of what I’ve created so
          far.
        </div>
      </div>

      <section className="portfolio">
        <Card
         link="https://e-commerce-project-five-olive.vercel.app/"
          image={project1}
        /*   descriptionTitle="Explore and inspiration" */
          description="Developed an e-commerce web application as the final project of my Front-End Engineering course, using React and TypeScript. The project focused on integrating a RESTful products API into a custom design created in Figma, ensuring a responsive and user-friendly interface."
          title="E-Commerce"
        />
        <Card
        link="https://imtv-in-react.vercel.app/movieslist"
          image={project2}
          /* descriptionTitle="Explore and inspiration" */
          description="Developed a movie database web application as the final project of the React module, using React with Vite. The project implements multiple React features, including Hooks, React Router, and Context to manage a light/dark theme. It integrates with the TMDB REST API to fetch and display dynamic movie data in an interactive and responsive interface."
          title="Movies Database"
        />
      </section>
    </div>
  );
}
export default Portfolio;
