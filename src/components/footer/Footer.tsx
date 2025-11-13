import React from "react";
import "./Footer.scss";

interface FooterProps {
  onProjectsClick: () => void;
  onAboutClick: () => void;
  onResumeClick: () => void;
}

const Footer: React.FC<FooterProps> = ({
  onProjectsClick,
  onAboutClick,
  onResumeClick,
}) => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <button className="btn-footer" onClick={onProjectsClick}>
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

          <button className="btn-footer" onClick={onAboutClick}>
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

          <button className="btn-footer" onClick={onResumeClick}>
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
      </nav>
      <div className="copy-wrapper">
        <p className="footer-copy">© 2025 Gonçalo Marques</p>
      </div>
      
    </footer>
  );
};

export default Footer;
