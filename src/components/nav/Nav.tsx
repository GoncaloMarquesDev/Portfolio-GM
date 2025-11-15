import "./Nav.scss";

interface NavProps {
  onProjectsClick: () => void;
  onAboutClick: () => void;
  onResumeClick: () => void;
}

function Nav({ onProjectsClick, onAboutClick, onResumeClick }: NavProps) {
  return (
     <nav className="nav">
    <div className="container">
      <div className="container_links">
        <div className="links">
          <button className="btn" onClick={onProjectsClick}>
            <div className="original">PROJECTS</div>
            <div className="letters">
              <span>P</span>
              <span>R</span>
              <span>O</span>
              <span>J</span>
              <span>E</span>
              <span>C</span>
              <span>T</span>
              <span>S</span>
            </div>
          </button>

          <button className="btn" onClick={onAboutClick}>
            <div className="original">ABOUT ME</div>
            <div className="letters">
              <span>A</span>
              <span>B</span>
              <span>O</span>
              <span>U</span>
              <span>T</span>
              <span>&nbsp; </span>
              <span>M</span>
              <span>E</span>
            </div>
          </button>

          <button className="btn" onClick={onResumeClick}>
            <div className="original">RESUME</div>
            <div className="letters">
              <span>R</span>
              <span>E</span>
              <span>S</span>
              <span>U</span>
              <span>M</span>
              <span>E</span>
            </div>
          </button>
        </div>
      </div>
      <div className="line"></div>
    </div>
    </nav>
  );
}

export default Nav;
