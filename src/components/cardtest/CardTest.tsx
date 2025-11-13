import React, { useState } from "react";
import "./CardTest.scss";

interface CardProps {
  image: string;
  description?: string;
  title: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ image, description, title, link }) => {
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="card-wrapper">
      <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
        <div
          className="card-content"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <div className="work-content">
            <img className="work-image" src={image} alt={title} />
            <div className="overlay"></div>
            <div className="work-description">
              <p className="description-text">{description}</p>
            
            </div>
            {/* Tooltip que segue o rato */}
            {hovering && (
              <div
                className="follow"
                style={{ left: tooltipPos.x, top: tooltipPos.y }}
              >
                SEE WORK
              </div>
            )}
          </div>
        </div>
        <h3 className="card-title">{title}</h3>
      </a>
    </div>
  );
};

export default Card;
