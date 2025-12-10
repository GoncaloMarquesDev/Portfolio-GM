import "./Chip.scss";

interface ChipsProps{
    content: string[];
}


const Chip: React.FC<ChipsProps> = ({ content = [] }) => {
  return (
    <div className="chip-react">
      {content.map((tec) => (
        <span key={tec} className="chip">{tec}</span>
      ))}
    </div>
  );
};


export default Chip