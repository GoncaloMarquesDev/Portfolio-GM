import Chip from "../chip/Chip";
import "./CardV2.scss";

interface CardV2Props {
  image: string;
  description?: string;
  title: string;
  link: string;
  technologies:string[];
  isSticky?: boolean;
}
const CardV2: React.FC<CardV2Props> = ({ image, description, title, link, technologies, }) => {
  if (!title || !image || !link) return null;
  return (
    <>
      <div className="portfolio-wrapper1 ">
        <div className="portfolio-description1">
          <div className="portfolio-header1">{title}</div>
          <div className="portfolio-text1">{description}</div>
          <div>
            <Chip content={technologies}/>
          </div>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          <img className="portfolio-img1" src={image} alt={title}></img>
        </a>
      </div>
     
    </>
  );
};
export default CardV2;
