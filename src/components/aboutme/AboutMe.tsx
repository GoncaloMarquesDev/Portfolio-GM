import Education from "../education/Education";

import "./AboutMe.scss";

function AboutMe() {
  return (
    <section className="wrapper-about">
      <div className="line-group">
        <hr className="section-line-about" />
        <p className="about-me"> About Me</p>
      </div>
      <div className="flex-about">
        <div className="about">
          <h3 className="me">Gonçalo Marques</h3>
          <p className="text-me">
            I’m a frontend developer based in Portugal, eager to grow and learn. Here, you can see my education and training journey.
          </p>
          <button className="cta">
            <span className="hover-underline-animation"> Contact Me </span>
            <svg
              id="arrow-horizontal"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="10"
              viewBox="0 0 46 16"
            >
              <path
                id="Path_10"
                data-name="Path 10"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                transform="translate(30)"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-education">
          {" "}
          <Education
            courseDesignation="Front End Engeneering"
            year="2025"
            school="EDIT"
          />
          <Education
            courseDesignation="Specialist Technician in Mechatronic Technology"
            year="2023"
            school="CENFIM"
          />
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
