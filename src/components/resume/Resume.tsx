import "./Resume.scss";
function Resume() {
  return (
    <div className="wrapper-resume">
      <div className="line-group">
        <hr className="section-line-resume" />
        <p className="resume"> Resume</p>
      </div>
      <div className="resume-content">
        <p className="resume-description">Here you can download my CV</p>
        <a
  href="/curriculo2025.pdf"
  download
  className="resume-btn"
>
  Download CV as PDF
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className="resume-icon"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
    />
  </svg>
</a>

      </div>
    </div>
  );
}
export default Resume;
